import { error } from "@sveltejs/kit";

export interface itemObject {
  json(): object | PromiseLike<object>;
  status: number;
}

/**
 * Global error handler
 */
export const errorHandler = async (items: itemObject): Promise<object> => {
  if (items.status !== 200) {
    console.log(items.json.toString());
    console.log("Test print");
    throw error(items.status);
  }
  return await items.json();
};
