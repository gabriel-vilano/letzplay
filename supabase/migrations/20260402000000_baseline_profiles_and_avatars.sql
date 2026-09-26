-- Baseline: estado criado manualmente pelo dashboard em abril/2026, antes de o
-- schema ser versionado. Reproduz o que existia antes das migrations seguintes.

-- Liga RLS automaticamente em toda tabela nova do schema public.
create or replace function public.rls_auto_enable()
returns event_trigger
language plpgsql
security definer
set search_path to 'pg_catalog'
as $$
declare
  cmd record;
begin
  for cmd in
    select *
    from pg_event_trigger_ddl_commands()
    where command_tag in ('CREATE TABLE', 'CREATE TABLE AS', 'SELECT INTO')
      and object_type in ('table', 'partitioned table')
  loop
    if cmd.schema_name is not null and cmd.schema_name in ('public') then
      begin
        execute format('alter table if exists %s enable row level security', cmd.object_identity);
        raise log 'rls_auto_enable: enabled RLS on %', cmd.object_identity;
      exception
        when others then
          raise log 'rls_auto_enable: failed to enable RLS on %', cmd.object_identity;
      end;
    else
      raise log 'rls_auto_enable: skip % (not in enforced list: %)', cmd.object_identity, cmd.schema_name;
    end if;
  end loop;
end;
$$;

drop event trigger if exists ensure_rls;
create event trigger ensure_rls
  on ddl_command_end
  when tag in ('CREATE TABLE', 'CREATE TABLE AS', 'SELECT INTO')
  execute function public.rls_auto_enable();

-- Perfil público do jogador (1:1 com auth.users)
create table public.profiles (
  id uuid primary key references auth.users (id),
  full_name text not null,
  username text unique,
  avatar_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Perfis visíveis para autenticados"
  on public.profiles for select to authenticated
  using (true);

create policy "Usuário cria próprio perfil"
  on public.profiles for insert to authenticated
  with check (auth.uid() = id);

create policy "Usuário edita próprio perfil"
  on public.profiles for update to authenticated
  using (auth.uid() = id);

-- Avatares: leitura pública; cada usuário escreve só em `<user_id>/...`
insert into storage.buckets (id, name, public)
values ('avatars', 'avatars', true)
on conflict (id) do nothing;

create policy "Avatar público para leitura 1oj01fe_0"
  on storage.objects for select to public
  using (bucket_id = 'avatars');

create policy "Usuário gerencia próprio avatar 1oj01fe_0"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);

create policy "Usuário gerencia próprio avatar 1oj01fe_1"
  on storage.objects for update to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);

create policy "Usuário gerencia próprio avatar 1oj01fe_2"
  on storage.objects for select to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text);
