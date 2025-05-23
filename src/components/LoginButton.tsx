import Image from "next/image";
import { Button } from "./ui/button";
import { signIn } from "@/auth";

const LoginButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn('google', {
          redirectTo: '/hello'
        });
      }}
    >
      <Button type="submit" className="mt-6 flex items-center gap-2">
        <Image
          src={"/google.svg"}
          alt="Google"
          width={48}
          height={48}
          className="h-5 w-5"
        />
        Sign in with Google
      </Button>
    </form>
  );
};

export default LoginButton;
