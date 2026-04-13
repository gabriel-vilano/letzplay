import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const PUBLIC_AUTH_ROUTES = ["/", "/entrar", "/cadastro"];
const ALWAYS_PUBLIC_ROUTES = [
  "/cadastro/verificar",
  "/cadastro/perfil",
  "/recuperar-senha",
  "/recuperar-senha/verificar",
  "/recuperar-senha/nova-senha",
];

export async function proxy(request: NextRequest) {
  let response = NextResponse.next({
    request: { headers: request.headers },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });
          response = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  if (user && PUBLIC_AUTH_ROUTES.includes(pathname)) {
    return NextResponse.redirect(new URL("/feed", request.url));
  }

  if (!user && !PUBLIC_AUTH_ROUTES.includes(pathname) && !ALWAYS_PUBLIC_ROUTES.includes(pathname)) {
    const hasSessionCookie = request.cookies.getAll().some((c) => c.name.startsWith("sb-"));
    const redirectUrl = new URL("/", request.url);
    if (hasSessionCookie) {
      redirectUrl.searchParams.set("expired", "true");
    }
    return NextResponse.redirect(redirectUrl);
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
