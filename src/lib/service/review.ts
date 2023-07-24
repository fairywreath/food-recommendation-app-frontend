import { errorHandler } from "./common";

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
