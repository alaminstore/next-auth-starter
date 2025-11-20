"use server";

import { signIn, signOut } from "../auth";

// Sign In
export async function doSocialLogin(formData: FormData): Promise<void> {
  const action = formData.get("action") as string;
  await signIn(action, { redirectTo: "/home" });
}

// Sign Out
export async function doLogOut(): Promise<void> {
  await signOut({ redirectTo: "/login" });
}
