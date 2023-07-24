import { errorHandler } from "./common";

export const getAllRestaurants = async (fetch: any): Promise<object> => {
  const response = await fetch(`/api/restaurants/all`);
  return errorHandler(response);
};
