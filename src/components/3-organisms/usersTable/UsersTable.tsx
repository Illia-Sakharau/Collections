import SectionWrapper from '@atoms/SectionWrapper';
import { IUserInfo } from '@/types/api';
import { DataTable } from '../dataTable/DataTable';
import BulkBar from '../bulkBar/BulkBar';
import useBulkUsers from './hooks/useBulkUsers';
import useDefUsersTable from './hooks/useDefUsersTable';

type Props = {
  data: IUserInfo[];
};

const UsersTable = ({ data }: Props) => {
  const bulkActions = useBulkUsers();
  const { table, columns } = useDefUsersTable({ data });

  return (
    <SectionWrapper
      containerProps={{
        pt: { base: 0, md: 0, xl: 0 },
      }}
    >
      <BulkBar
        rowSelection={table.getState().rowSelection}
        actions={bulkActions}
      />
      <DataTable columns={columns} isSelected table={table} />
    </SectionWrapper>
  );
};

export default UsersTable;
