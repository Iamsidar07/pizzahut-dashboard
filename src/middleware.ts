import { auth } from "@/auth";

const protectedRoutes = ["/hello", "/orders"];

export default auth((req) => {
  if (!req.auth && protectedRoutes.includes(req.nextUrl.pathname)) {
    const newUrl = new URL("/login", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
  if (req.auth && req.nextUrl.pathname === "/login") {
    return Response.redirect(new URL("/hello", req.nextUrl.origin));
  }
  if (req.auth && req.nextUrl.pathname === "/") {
    const newUrl = new URL("/hello", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
