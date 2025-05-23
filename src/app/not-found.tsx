import Container from "@/components/Container";
import { buttonVariants } from "@/components/ui/button";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container className="pt-8 lg:pt-12 flex flex-col items-center">
      <Image src={"/404.svg"} alt="404" width={400} height={300} />
      <h2 className="mt-6">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        className={buttonVariants({ variant: "default", className: "mt-4" })}
      >
        <Home />
        Return Home
      </Link>
    </Container>
  );
}
