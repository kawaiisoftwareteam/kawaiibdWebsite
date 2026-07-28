import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Suppress a known dev-only missing source map request from the app chunk.
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
