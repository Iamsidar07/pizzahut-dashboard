"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { AuthContextProvider } from "./AuthProvider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </SessionProvider>
  );
};

export default Provider;
