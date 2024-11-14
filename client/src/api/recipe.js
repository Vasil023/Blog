import apiClient from "./axios";

const NAME = "recipes/get-all";
const CREATE = "recipes/create";
const UPDATE = "recipes/update";

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

export const checkItem = async (id, isChecked) => {
  console.log('id', id, 'isChecked', isChecked);
  try {
    const response = await apiClient.put(`${UPDATE}/${id}`, { isChecked: isChecked });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products', error);
    throw error;
  }
};


