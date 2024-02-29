'use client';
import GenericListPage from '@/app/components/GenericListPage';
import { DataType } from '@/app/types/DataType';
import { RecoilRoot } from 'recoil';

export default function Page() {
  return (
    <RecoilRoot>
      <GenericListPage dataType={DataType.Products} />
    </RecoilRoot>
  );
}
