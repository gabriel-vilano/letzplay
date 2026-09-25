-- Sem cascade, apagar um usuário de auth.users falhava enquanto existisse o perfil.
alter table public.profiles drop constraint profiles_id_fkey;
alter table public.profiles
  add constraint profiles_id_fkey foreign key (id) references auth.users (id) on delete cascade;
