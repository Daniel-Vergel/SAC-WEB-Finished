import {jwtDecode} from 'jwt-decode';

interface TokenTypes  {
  exp?: number;
  iat?: number;
  id: number;
  personalId: number;
  userLongName: string; 
  userName: string;
} 

export const getDecodedToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const decoded = jwtDecode< TokenTypes >(token);
      return decoded;
    } catch (error) {
      console.error('Error decodificando el token:', error);
      return null;
    }
  }
  return null;
};
