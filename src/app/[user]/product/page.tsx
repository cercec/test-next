'use client';
import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { RecoilRoot } from 'recoil';
import Navbar from '@/app/components/Navbar';
import GenericListPage from '@/app/components/GenericListPage';
import { DataType } from '@/app/types/DataType';

export default function Page({ params }: { params: { user: string } }) {
  const [products, setProducts] = useState([]);

  const fetchProductsByUser = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/user/${params.user}/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('userToken')}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [params.user]);

  useEffect(() => {
    fetchProductsByUser();
  }, [fetchProductsByUser]);

  return (
    <RecoilRoot>
      <Navbar />
      <GenericListPage dataType={DataType.Products} showFilter={false} />
    </RecoilRoot>
  );
}
