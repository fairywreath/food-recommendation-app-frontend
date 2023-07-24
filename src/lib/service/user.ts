import { error } from "@sveltejs/kit";

interface itemObject {
  json(): object | PromiseLike<object>;
  status: number;
}

/**
 * Global error handler
 */
const errorHandler = async (items: itemObject): Promise<object> => {
  if (items.status !== 200) {
    console.log(items.json.toString());
    console.log("Test print");
    throw error(items.status);
  }
  return await items.json();
};

export const getUser = async (fetch: any, id: string): Promise<object> => {
  const response = await fetch(`/api/users/${id}`);
  return errorHandler(response);
};
