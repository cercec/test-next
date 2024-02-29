import { atom } from 'recoil';
import { Product } from '@/app/types/Product';

interface StateProps {
  isLogged: boolean;
  userRole: string;
  userToken: string;
  userId: string;
  cart: Product[];
}

export const userState = atom<StateProps>({
  key: 'userState',
  default: {
    isLogged: false,
    userRole: '',
    userToken: '',
    userId: '',
    cart: [],
  },
});
