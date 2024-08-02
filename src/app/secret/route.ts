import {NextRequest, NextResponse} from 'next/server';
import {redirect} from 'next/navigation';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  // любой пароль
  const query = searchParams.get('key');

  if (query) {
    const response = NextResponse.redirect('http://localhost:3000/');
    response.cookies.set('authorized', query);
    return response;
  }

  return redirect('/not-found');
}
