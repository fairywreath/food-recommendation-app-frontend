import { get } from "svelte/store";

import type { PageServerLoad } from "./$types";

import { getAllRestaurants } from "$service/restaurant";

import { auth, isLoggedIn } from "$lib/store/auth";

export const load = (async ({ fetch }) => {
  // console.log(get(auth).email);
  // console.log(get(isLoggedIn));

  return {
    main_recommendations: getAllRestaurants(fetch),
  };
}) satisfies PageServerLoad;
