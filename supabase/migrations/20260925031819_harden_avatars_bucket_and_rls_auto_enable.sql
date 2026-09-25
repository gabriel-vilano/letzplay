-- Bucket de avatares: limita tamanho e tipos aceitos (antes: sem limite, qualquer arquivo).
-- Os tipos batem com o `accept` do AvatarUpload.
update storage.buckets
set file_size_limit = 2097152,
    allowed_mime_types = array['image/jpeg', 'image/png', 'image/webp']
where id = 'avatars';

-- rls_auto_enable é função de event trigger; não deve ser chamável via /rest/v1/rpc
-- (Supabase advisor 0028/0029). O event trigger continua disparando normalmente.
revoke execute on function public.rls_auto_enable() from public, anon, authenticated;
