import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

  let isLogin = request.cookies.get("login");

  if (!isLogin) {
    if (
      request.nextUrl.pathname.startsWith("/home") ||
      request.nextUrl.pathname.startsWith("/transfer") ||
      request.nextUrl.pathname.startsWith("/profile")
    ) {
      return NextResponse.rewrite(new URL("/auth/login", request.url));
    }
  } else if (isLogin) {
    if (request.nextUrl.pathname.startsWith("/auth")) {
      return NextResponse.redirect(new URL("/home", request.url));
    }
  }
}
