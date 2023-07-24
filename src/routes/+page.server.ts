import type { PageServerLoad } from "./$types";

import { getAllRestaurants } from "$service/restaurant";

export const load = (({ fetch }) => {
  return {
    // one: Promise.resolve(1),
    // two: Promise.resolve(2),
    // streamed: {
    //   three: new Promise((fulfil) => {
    //     setTimeout(() => {
    //       fulfil(3);
    //     }, 1000);
    //   }),
    // },
    main_recommendtaions: getAllRestaurants(fetch),
  };
}) satisfies PageServerLoad;
