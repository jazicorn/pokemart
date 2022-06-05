import { NextRequest, NextResponse } from 'next/server'
export { default } from "next-auth/middleware"

export function middleware(req: NextRequest) {
    const status = req.headers.get('status')
    
    if (status != 'POST') {
        return new Response(`The HTTP ${status} method is not supported at this route.`, {
            status: 405
        })       
    }

    return NextResponse.next()
}
