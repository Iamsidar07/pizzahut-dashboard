import { auth } from "@/auth";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  return (
    <Container className="flex p-4 pt-8 lg:pt-12 flex-col items-center justify-center px-4 sm:px-0">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          🍕 Welcome to Pizzahut
        </h1>
        <p>Sign in to order your favorite slice!</p>

        {session ? (
          <Link href={"/orders"} className="mt-6">
            <Button variant={"link"}>Orders</Button>
          </Link>
        ) : (
          <Link href={"/login"} className="mt-6">
            <Button variant={"link"}>Login to continue</Button>
          </Link>
        )}
      </div>

      <div className="mt-12">
        <Image
          src="/logo.png"
          alt="Pizza illustration"
          className="w-40 lg:w-80 opacity-80"
          width={400}
          height={313}
        />
      </div>
    </Container>
  );
}
