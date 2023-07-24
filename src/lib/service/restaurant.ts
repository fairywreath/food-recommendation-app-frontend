import { errorHandler } from "./common";

export const getAllRestaurants = async (fetch: any): Promise<object> => {
  const response = await fetch(`/api/restaurants/all`);
  return errorHandler(response);
};

export const getRestaurant = async (
  fetch: any,
  id: string
): Promise<object> => {
  const response = await fetch(`/api/restaurants/${id}/details`);
  return errorHandler(response);
};
