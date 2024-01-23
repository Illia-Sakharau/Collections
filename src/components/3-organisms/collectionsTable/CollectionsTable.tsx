import { ICollectionInfo } from '@/types/api';
import useDefCollectionTable from './hooks/useDefCollectionTable';
import { DataTable } from '@organisms/dataTable/DataTable';
import useRowClick from './hooks/useRowClick';

type Props = {
  isAll?: boolean;
  data: ICollectionInfo[];
};

const CollectionsTable = ({ isAll, data }: Props) => {
  const { table } = useDefCollectionTable({ data, isAll: !!isAll });
  const rowClickHandler = useRowClick();

  return <DataTable table={table} onRowClick={rowClickHandler} />;
};

export default CollectionsTable;
