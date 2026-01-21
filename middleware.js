import { NextResponse } from "next/server";

const RESERVED = new Set([
  "",
  "ambassador-access",
  "ambassador-thanks",
  "archives",
  "inquire",
  "products",
  "components",
  "api",
  "r",
  "favicon.ico",
  "robots.txt",
  "sitemap.xml",
]);

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // ignore files + anything deeper than "/slug"
  if (pathname.includes(".") || pathname.split("/").length > 2) {
    return NextResponse.next();
  }

  const slug = pathname.replace("/", ""); // "/jay" -> "jay"
  if (!slug || RESERVED.has(slug)) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = `/r/${slug}`;
  return NextResponse.rewrite(url);
}

export const config = { matcher: ["/:slug"] };
