import GenericListPage from '@/app/components/GenericListPage';
import { DataType } from '@/app/types/DataType';

export default function Page() {
  return <GenericListPage dataType={DataType.Users} />;
}
