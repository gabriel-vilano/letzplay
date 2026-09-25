#!/usr/bin/env bash
# Traduz as credenciais do Supabase local (`supabase status`) para as variáveis que o app e os
# testes E2E leem. Usado pela CI e para rodar local; só enxerga o Supabase local, nunca o remoto.
#   CI:    bash scripts/supabase-e2e-env.sh >> "$GITHUB_ENV"
#   Local: export $(bash scripts/supabase-e2e-env.sh | xargs)
set -euo pipefail

status_env="$(supabase status -o env)"
eval "$status_env"

# Só os nomes (nunca os valores) vão para o log: ajuda a diagnosticar mudança de nome no CLI
echo "Variáveis do supabase status: $(echo "$status_env" | cut -d= -f1 | xargs)" >&2

: "${API_URL:?supabase status não devolveu API_URL}"
: "${PUBLISHABLE_KEY:?supabase status não devolveu PUBLISHABLE_KEY}"
: "${SECRET_KEY:?supabase status não devolveu SECRET_KEY}"
: "${MAILPIT_URL:?supabase status não devolveu MAILPIT_URL}"

echo "NEXT_PUBLIC_SUPABASE_URL=$API_URL"
echo "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=$PUBLISHABLE_KEY"
echo "E2E_SUPABASE_SECRET_KEY=$SECRET_KEY"
echo "E2E_MAILPIT_URL=$MAILPIT_URL"
