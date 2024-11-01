// src/api/auth.ts
import axios from 'axios';

const API_URL = 'http://localhost:8000/accounts';

export interface RegisterData {
  email: string;
  password: string;
  role: string;
  // add other registration fields as needed
}

export interface LoginData {
  email: string;
  password: string;
}

export const registerUser = async (data: RegisterData) => {
  return await axios.post(`${API_URL}/register/`, data);
};

export const loginUser = async (data: LoginData) => {
  return await axios.post(`${API_URL}/login/`, data);
};
