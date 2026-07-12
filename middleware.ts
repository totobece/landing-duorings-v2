import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const url = request.nextUrl;

  // Redirect root domain to www
  if (host === "duo-rings.com" || host === "duo-rings.com:80" || host === "duo-rings.com:443") {
    const wwwUrl = url.clone();
    wwwUrl.hostname = "www.duo-rings.com";
    return NextResponse.redirect(wwwUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|media).*)"],
};
