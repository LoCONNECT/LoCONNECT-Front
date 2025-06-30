import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // 토큰 없으면 로그인 페이지로 이동
  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // 토큰 있으면 통과
  return NextResponse.next();
}

export const config = {
  matcher: ["/alarm/:path*", "/mypage/:path*"], // 보호할 경로 지정
};
