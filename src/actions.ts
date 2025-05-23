"use server";

import { signOut } from "./auth";

export const handleLogout = async () => {
  try {
    await signOut({
      redirect: false,
    });
    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};