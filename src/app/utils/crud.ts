import { User } from '@/app/types/User';
import axios from 'axios';
import { Product } from '@/app/types/Product';
import { DataType } from '@/app/types/DataType';

export const postItem = async (dataType: DataType, item: User | Product) => {
  try {
    const endpoint = dataType === 'users' ? 'users' : 'products';
    return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, item, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      },
    });
  } catch (error) {
    console.error('Error saving item:', error);
  }
};

export const editItem = async (dataType: DataType, item: User | Product) => {
  try {
    const endpoint = dataType === 'users' ? 'users' : 'products';

    return await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}/${item._id}`, item, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      },
    });
  } catch (error) {
    console.error('Error saving item:', error);
  }
};

export const deleteItem = async (dataType: DataType, item: User | Product) => {
  try {
    const endpoint = dataType === 'users' ? 'users' : 'products';
    return axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}/${item._id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      },
    });
  } catch (error) {
    console.error('Error deleting item:', error);
  }
};
