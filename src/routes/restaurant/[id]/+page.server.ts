import { fail } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";

import { getRestaurant } from "$service/restaurant";
import {
  getRestaurantReviews,
  createReview,
  type ReviewCreationParameters,
  deleteReview,
} from "$service/review";

export const load = (async ({ fetch, params }) => {
  return {
    restaurant: getRestaurant(fetch, params.id),
    reviews: getRestaurantReviews(fetch, params.id),
  };
}) satisfies PageServerLoad;

export const actions = {
  createReview: async ({ fetch, request, params }) => {
    try {
      const data = await request.formData();

      const user_id = data.get("userId")?.toString();
      const review_text = data.get("reviewText")?.toString();

      if (typeof user_id == "undefined" || typeof review_text == "undefined") {
        return fail(400, { message: "Invalid form parameters" });
      }

      const parameters: ReviewCreationParameters = {
        restaurant_id: params.id,
        user_id: user_id,
        review_text: review_text,
        date: new Date().toISOString(),
      };

      // XXX: This will be used on the use:enhance={} callback
      const response = await createReview(fetch, parameters);

      return response;
    } catch (error: any) {
      console.log("Failed to publish review!");
      // XXX: Return proper error
      return null;
    }
  },

  deleteReview: async ({ fetch, request }) => {
    console.log("Called delete review!");
    try {
      const data = await request.formData();

      const reviewId = data.get("reviewId")?.toString();

      if (typeof reviewId == "undefined") {
        return fail(400, { message: "Invliad delete form parameters" });
      }

      const response = await deleteReview(fetch, reviewId);

      return response;
    } catch (error: any) {
      console.log("Failed to delete review!");
      // XXX: Return proper error
      return null;
    }
  },
} satisfies Actions;
