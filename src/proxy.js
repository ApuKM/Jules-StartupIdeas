import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function proxy(request) {
  const { pathname } = request.nextUrl;
  console.log(request.nextUrl)
  console.log(request.url)
  console.log("proxy runs")
  const isProtected =
    pathname === "/add-idea" ||
    pathname === "/my-ideas" ||
    pathname === "/profile" ||
    pathname.startsWith("/ideas/");

  if (!isProtected) {
    return NextResponse.next();
  }

  let session = null;

  try {
    session = await auth.api.getSession({
      headers: await headers(),
    });
  } catch {
    session = null;
  }

  if (!session?.user) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/ideas/:path*", "/add-idea", "/my-ideas", "/profile"],
};