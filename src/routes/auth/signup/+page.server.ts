import { fail, redirect } from "@sveltejs/kit";

import type { Actions } from "./$types";

import { createUser, type UserCreationParameters } from "$service/user";

export const actions = {
  create: async ({ fetch, request }) => {
    try {
      const data = await request.formData();

      // XXX: Have a better validation mechanism
      const parameters: UserCreationParameters = {
        name: data.get("name")?.toString() ?? "",
        email: data.get("email")?.toString() ?? "",
      };
      if (!parameters.name || !parameters.email) {
        console.log("Throwing error after form submission!");
        // XXX: Throw a better stringifiable error here
        throw new Error("Invalid name or email format");
      }

      const response = await createUser(fetch, parameters);
      return response;
    } catch (error: any) {
      // return error;
      console.log("Failed to sign up user!");
      console.log(error);
      // return error;
      return;
    }
  },
} satisfies Actions;
