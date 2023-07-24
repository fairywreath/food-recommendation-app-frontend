import type { PageServerLoad } from "./$types";
import { getUser } from "$service/user";
import { getUserReviews } from "$service/review";

export const load = (async ({ fetch, params }) => ({
  user: getUser(fetch, params.id),
  reviews: getUserReviews(fetch, params.id),
})) satisfies PageServerLoad;
