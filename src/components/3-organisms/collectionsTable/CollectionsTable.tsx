import { ICollectionInfo } from '@/types/api';
import useDefCollectionTable from './hooks/useDefCollectionTable';
import { DataTable } from '@organisms/dataTable/DataTable';

type Props = {
  isAll?: boolean;
};

const data: ICollectionInfo[] = [
  {
    id: 1,
    title: 'Collection1',
    description: 'Some description for collection 1',
    theme: 'Theme1',
    imgUrl:
      'https://images.unsplash.com/photo-1560427450-00fa9481f01e?q=80&w=693&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    username: 'User Name 1',
  },
  {
    id: 2,
    title: 'Collection2',
    description:
      'Идейные соображения высшего порядка, а также высокое качество позиционных исследований требует от нас анализа благоприятных перспектив. Предварительные выводы неутешительны: современная методология разработки однозначно фиксирует необходимость экономической целесообразности принимаемых решений. Идейные соображения высшего порядка, а также современная методология разработки позволяет оценить значение прогресса профессионального сообщества.',
    theme: 'Theme2',
    imgUrl:
      'https://images.unsplash.com/photo-1600368140362-c15b880e7f2d?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    username: 'User Name 2',
  },
  {
    id: 3,
    title: 'Collection3',
    description: 'Some description for collection 3',
    theme: 'Theme3',
    imgUrl: '',
    username: 'User Name 3',
  },
];

const CollectionsTable = ({ isAll }: Props) => {
  const { table } = useDefCollectionTable({ data, isAll: !!isAll });
  return (
    <DataTable table={table} />
  );
};

export default CollectionsTable;
