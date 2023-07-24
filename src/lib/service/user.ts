import { errorHandler } from "./common";

export const getUser = async (fetch: any, id: string): Promise<object> => {
  const response = await fetch(`/api/users/${id}`);
  return errorHandler(response);
};
