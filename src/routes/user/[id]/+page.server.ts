import type { PageServerLoad } from "./$types";
import { getUser } from "$service/user";

export const load = (async ({ fetch, params }) => ({
  // artist: getArtist(fetch, params.id),
  // albums: getArtistAlbums(fetch, params.id, 50)
  user: getUser(fetch, params.id),
})) satisfies PageServerLoad;
