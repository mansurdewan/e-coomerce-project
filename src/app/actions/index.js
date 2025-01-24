"use server";

import { signIn, signOut } from "@/auth";

export async function doSocialLogin(provider) {
  await signIn(provider, { redirectTo: "/" });
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}
