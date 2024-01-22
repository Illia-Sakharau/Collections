import { bulkAction } from '@/types/componens';
import {
  Flex,
  FlexProps,
  useColorModeValue,
  Text,
  Spacer,
  useMediaQuery,
} from '@chakra-ui/react';
import { RowSelectionState } from '@tanstack/react-table';
import ButtonBar from './components/ButtonBar';
import ButtonMenu from './components/ButtonMenu';
import { useTranslation } from 'react-i18next';

type Props = {
  rowSelection: RowSelectionState;
  actions: bulkAction[];
} & FlexProps;

const BulkBar = ({ rowSelection, actions, ...props }: Props) => {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const borderColor = useColorModeValue('gray.300', 'gray.700');
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const { t } = useTranslation();
  const selectedID = Object.keys(rowSelection).map((id) => +id);
  const selectedCount = selectedID.length;

  return (
    <Flex
      bg={bg}
      py={{ base: 2, md: 3 }}
      px={{ base: 3, md: 6 }}
      border={'solid 1px'}
      borderColor={borderColor}
      borderRadius={{ base: 6, md: 8 }}
      alignItems={'center'}
      {...props}
    >
      <Text>
        {t('bulk_bar.selected')} {selectedCount}
      </Text>
      <Spacer />
      {isLargerThan768 ? (
        <ButtonBar selectedID={selectedID} actions={actions} />
      ) : (
        <ButtonMenu selectedID={selectedID} actions={actions} />
      )}
    </Flex>
  );
};

export default BulkBar;
