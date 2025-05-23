import Container from "@/components/Container";
import LoginButton from "@/components/LoginButton";
import Image from "next/image";

export default function Login() {
  return (
    <Container className="flex pt-12 lg:pt-20 flex-col items-center justify-center px-4">
      <div className="text-center space-y-4 flex flex-col items-center">
        <h1 className="text-xl lg:text-5xl font-bold">🍕 Welcome to Pizzahut</h1>
        <p className="">Sign in to order your favorite slice!</p>
      <LoginButton/> 
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
