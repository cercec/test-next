'use client';
import { useCallback, useEffect, useState } from 'react';
import { Product } from '@/app/types/Product';
import { getAllProducts } from '@/app/utils/fetchers';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState } from '@/app/state/atom';

export default function ProductList() {
  /* Vars */
  const [products, setProducts] = useState<Product[]>([]);
  const setUserState = useSetRecoilState(userState);
  const { cart } = useRecoilValue(userState);

  /* Functions */
  const fetchData = useCallback(async () => {
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  const handleAddToCart = (productToAdd: Product) => {
    setUserState(prevState => {
      const currentCart = prevState.cart ?? [];
      const exists = currentCart.find(product => product._id === productToAdd._id);
      if (!exists) {
        return {
          ...prevState,
          cart: [...currentCart, productToAdd],
        };
      }
      return prevState;
    });
  };

  /* Effects */
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map(product => (
          <div key={product._id} className="card card-compact bg-base-100 shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
            <figure className="px-10 pt-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={product.imageUrl || 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'} alt={product.title} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{product.title}</h2>
              <p>{product.description}</p>
              <p>{product.price} €</p>
              <div className="card-actions">
                <button className={`btn btn-primary ${cart?.some(cartProduct => cartProduct._id === product._id) ? 'btn-disabled' : ''}`} onClick={() => handleAddToCart(product)}>
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
