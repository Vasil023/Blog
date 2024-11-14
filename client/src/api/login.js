import apiClient from "./axios";

const REGISTER = "/register";
const LOGIN = "/login";

export const register = async (email, password, role) => {
  try {
    const response = await apiClient.post(REGISTER, { email, password, role });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products', error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await apiClient.post(LOGIN, { email, password });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products', error);
    throw error;
  }
};


