import { createBrowserClient } from "@supabase/ssr";

import { getSupabasePublicEnv } from "@/src/lib/supabase/env";

export function createClient() {
  const { url, publishableKey } = getSupabasePublicEnv();
  return createBrowserClient(url, publishableKey);
}
