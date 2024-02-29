'use client';
import ProductList from '@/app/components/ProductList';
import { RecoilRoot } from 'recoil';
import Navbar from '@/app/components/Navbar';

export default function Page() {
  return (
    <RecoilRoot>
      <Navbar />
      <ProductList />
    </RecoilRoot>
  );
}
