"use client";
import { useSession } from "next-auth/react";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface Auth {
  isLoggedIn: boolean;
  updateLoginStatus: (status: boolean) => void;
}

const AuthContext = createContext<Auth>({
  isLoggedIn: false,
  updateLoginStatus: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      setIsLoggedIn(true);
    }
  }, [session]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, updateLoginStatus: setIsLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthState = ()=>useContext(AuthContext)
