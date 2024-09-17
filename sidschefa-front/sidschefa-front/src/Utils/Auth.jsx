import { jwtDecode } from "jwt-decode";

export const getToken = () => localStorage.getItem('token');

export const getUserRole = () => {
  const token = getToken();
  if (token) {
    try {
      const decoded = jwtDecode(token);      
      return decoded.role;
    } catch (error) {
      console.error('Token decoding failed:', error);
      return null;
    }
  }
  return null;
};