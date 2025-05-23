"use client";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { useSession } from "next-auth/react";
import UserButton from "./UserButton";
import { User } from "next-auth";
import { Loader2 } from "lucide-react";
import { useAuthState } from "./AuthProvider";
import Container from "./Container";

const Navbar = () => {
  const { data: session, status } = useSession();
  const { isLoggedIn } = useAuthState();

  return (
    <header className="border-b ">
      <Container className="flex items-center justify-between gap-6 p-2 sm:py-2.5">
        <Link href="/">
          <span className="text-2xl font-bold font-heading">🍕 <span className="hidden sm:inline-flex">pizzahut</span></span>
        </Link>
        <nav>
          <ul className="flex items-center gap-0 lg:gap-4">
            {status === "loading" ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : isLoggedIn && session?.user ? (
              <>
                <li>
                  <Link
                    href="/hello"
                    className={buttonVariants({ variant: "link" })}
                  >
                    Welcome
                  </Link>
                </li>
                <li>
                  <Link
                    href="/orders"
                    className={buttonVariants({ variant: "link" })}
                  >
                    Pizza Orders
                  </Link>
                </li>
                <UserButton user={session.user as User} />
              </>
            ) : (
              <li>
                <Link
                  href="/login"
                  className={buttonVariants({ variant: "link" })}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
