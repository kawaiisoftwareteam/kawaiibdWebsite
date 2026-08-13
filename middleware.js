import { NextResponse } from 'next/server';

// Note: middleware does not run with `output: "export"` (static cPanel deploy).
// Kept for local `next dev` / Node hosting only.
export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next/static/chunks/app/') &&
    pathname.endsWith('/LayoutGroupContext.mjs.map')
  ) {
    return new NextResponse('{}', {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/_next/static/chunks/app/:path*',
};
