import { isAuthenticated } from "@/utils/actions";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


const guestRoutes = ["/login"];


export default function middleware(req: NextRequest) {
    if (isAuthenticated(req) && guestRoutes.includes(req.nextUrl.pathname)) {
        return NextResponse.redirect("/");
    }
}