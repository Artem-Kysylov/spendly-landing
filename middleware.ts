import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''
  const hostname = host.split(':')[0].toLowerCase()
  if (hostname === 'www.getspendly.net') {
    const url = new URL(req.url)
    url.host = 'getspendly.net'
    return NextResponse.redirect(url, 308)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|robots\\.txt|sitemap\\.xml|favicon\\.ico|.*\\..*).*)', '/'],
}
