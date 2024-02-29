export interface Product {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number | string;
  owner: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  userId: {
    _id: string;
    firstName: string;
    lastName: string;
  };
}

export type ProductFormValues = Omit<Product, '_id'>;
