"use server";

import { signIn, signOut } from "./auth";

export const signInWithGoogle = async () => {
  try {
    await signIn("google", {
        redirectTo: '/hello',
    });
    return { success: true, message: "User is logged in successfully" };
  } catch (error: any) {
    console.log(error)
    return { success: false, message: error.message };
  }
};

export const handleLogout = async () => {
  try {
    await signOut();
    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};