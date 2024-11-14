import apiClient from "./axios";

const NAME = "/get-all";
const CREATE = "/create";

export const createRecipe = async ({ ...args }) => {
  try {
    const response = await apiClient.post(CREATE, { ...args });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products', error);
    throw error;
  }
};

export const getAllRecipe = async () => {
  try {
    const response = await apiClient.get(NAME);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products', error);
    throw error;
  }
};


