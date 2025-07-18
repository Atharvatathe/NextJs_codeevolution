import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest) {
    const response = NextResponse.next();

    const themePreference = request.cookies.get("theame");
    if(!themePreference){
        response.cookies.set("theme","dark");
    }

    response.headers.set("custom-header", "custom-value");

    return response;

    //return NextResponse.redirect(new URL("/", request.url));
    // if(request.nextUrl.pathname === "/profile"){
    //     return NextResponse.rewrite(new URL("/hello", request.url));
    // }
}

// export const config = {
//     matcher:"/profile"
// }