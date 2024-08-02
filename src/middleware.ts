import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('authorized');

  if (!authCookie) {
    return NextResponse.redirect(new URL('/not-found', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
