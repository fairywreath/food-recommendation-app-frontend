import { errorHandler, postErrorHandler } from "./common";

// class Review {
//   constructor(public x: number, public y: number) {}
// }

export const getUserReviews = async (
  fetch: any,
  user_id: string
): Promise<object> => {
  const response = await fetch(`/api/reviews/user/${user_id}`);
  return errorHandler(response);
};

export const getRestaurantReviews = async (
  fetch: any,
  restaurant_id: string
): Promise<object> => {
  const response = await fetch(`/api/reviews/restaurant/${restaurant_id}`);
  return errorHandler(response);
};

export interface ReviewCreationParameters {
  restaurant_id: string;
  user_id: string;
  review_text: string;
  date: string;
}

export const createReview = async (
  fetch: any,
  parameters: ReviewCreationParameters
): Promise<object> => {
  const response = await fetch("/api/reviews/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(parameters),
  });
  return postErrorHandler(response);
};

export const deleteReview = async (
  fetch: any,
  reviewId: string
): Promise<object> => {
  const response = await fetch(`/api/reviews/delete/${reviewId}`, {
    // const response = await fetch(`/api/reviews/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify({
    // review_id: reviewId,
    // }),
  });
  return errorHandler(response);
};
