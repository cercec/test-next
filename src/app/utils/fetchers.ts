import axios from 'axios';
import { Product } from '@/app/types/Product';

export const getAllProducts = async () => {
  try {
    const response = await axios.get<{ products: Product[] }>(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    return response.data.products;
  } catch (error) {
    console.error('Could not fetch products:', error);
    return [];
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
    return response.data.users;
  } catch (error) {
    console.error('Could not fetch users:', error);
    return [];
  }
};

export const getUserById = async (id: string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`);
    return `${response.data.firstName} ${response.data.lastName}`;
  } catch (error) {
    console.error('Could not fetch user:', error);
    return null;
  }
};
