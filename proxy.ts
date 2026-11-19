import { auth } from '@/lib/auth'
export default auth.middleware({ loginUrl: '/' })
export const config = { matcher: ['/sohbet/:path*'] }
