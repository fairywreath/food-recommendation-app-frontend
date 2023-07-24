import type { PageServerLoad } from "./$types";
import { getUser } from "$service/user";
import { getUserReviews } from "$service/review";

export const load = (async ({ fetch, params }) => ({
  // artist: getArtist(fetch, params.id),
  // albums: getArtistAlbums(fetch, params.id, 50)
  user: getUser(fetch, params.id),
  reviews: getUserReviews(fetch, params.id),
})) satisfies PageServerLoad;
