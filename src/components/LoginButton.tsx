'use client';

import Image from "next/image";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react"; 
import { useState } from "react";
import { Loader2 } from "lucide-react";

const LoginButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      await signIn('google', {
        callbackUrl: '/hello',
        redirect: true
      });
    } catch (error) {
      console.error('Sign in failed:', error);
      setIsLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleSignIn}
      disabled={isLoading}
      className="mt-6 flex items-center gap-2"
    >
      {isLoading ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <Image
          src={"/google.svg"}
          alt="Google"
          width={48}
          height={48}
          className="h-5 w-5"
        />
      )}
      Sign in with Google
    </Button>
  );
};

export default LoginButton;
