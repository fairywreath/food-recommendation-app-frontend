import { error } from "@sveltejs/kit";

export interface itemObject {
  json(): object | PromiseLike<object>;
  status: number;
}

export const errorHandler = async (items: itemObject): Promise<object> => {
  // console.log(`Error handle item status: ${items.status}`);
  if (items.status !== 200) {
    throw error(items.status);
  }
  return await items.json();
};

export const postErrorHandler = async (items: itemObject): Promise<object> => {
  if (items.status !== 201) {
    throw error(items.status);
  }
  return await items.json();
};
