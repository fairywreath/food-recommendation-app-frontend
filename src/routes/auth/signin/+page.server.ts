import { redirect, fail } from "@sveltejs/kit";
import { get } from "svelte/store";

import type { Actions } from "./$types";
import { auth, isLoggedIn } from "$lib/store/auth";

export const actions = {
  signIn: async ({ fetch, request, cookies }) => {
    const data = await request.formData();
    const email = data.get("email")?.toString();
    if (typeof email == "undefined") {
      return fail(400, { message: "Email is missing" });
    }

    cookies.set("email", email);
    // auth.set({ email: email });
    // isLoggedIn.set(true);
    // console.log("Setting store....");
    // console.log(get(isLoggedIn));
    // console.log(get(auth).email);
    throw redirect(303, "/");
  },
} satisfies Actions;
