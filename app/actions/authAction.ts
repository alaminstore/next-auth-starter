"use server";

import { signIn, signOut } from "../auth";
import { AuthError } from "next-auth";

export async function doSocialLogin(formData: FormData) {
  const action = formData.get("action") as string;
  await signIn(action, { redirectTo: "/home" });
}

export async function doLogOut() {
  await signOut({ redirectTo: "/login" });
}

// export async function doCredentialLogin(formData: FormData) {
//   console.log("formData", formData);

//   try {
//     const response = await signIn("credentials", {
//       email: formData.get("email") as string,
//       password: formData.get("password") as string,
//       redirect: false,
//     });
//     return response;
//   } catch (err) {
//     throw err;
//   }
// }

export async function doCredentialLogin(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { success: false, message: "Invalid email or password" };
        default:
          return { success: false, message: "Something went wrong" };
      }
    }
    throw error;
  }
}
