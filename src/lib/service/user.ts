import { errorHandler, postErrorHandler } from "./common";

export const getUser = async (fetch: any, id: string): Promise<object> => {
  const response = await fetch(`/api/users/${id}`);
  return errorHandler(response);
};

export interface UserCreationParameters {
  name: string;
  email: string;
}

export const createUser = async (
  fetch: any,
  parameters: UserCreationParameters
): Promise<object> => {
  const response = await fetch("/api/users/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(parameters),
  });

  return postErrorHandler(response);
};

export interface UserAuthenthicationParameters {
  email: string;
}
