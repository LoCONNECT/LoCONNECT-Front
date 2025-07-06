import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;
  const { pathname } = request.nextUrl;

  // 로그인한 사용자가 로그인/회원가입 접근 시 인트로로 이동
  if (token && (pathname === "/login" || pathname === "/signUp")) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // 토큰 없으면 로그인 페이지로 이동
  if (
    !token &&
    (pathname.startsWith("/alarm") ||
      pathname.startsWith("/mypage") ||
      pathname.startsWith("/main"))
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // 토큰 있으면 통과
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/signUp",
    "/alarm/:path*",
    "/mypage/:path*",
    "/main/:path*",
  ], // 보호할 경로 지정
};
