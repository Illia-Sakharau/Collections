import {
  VStack,
  Text,
  useColorModeValue,
  HStack,
  Heading,
  Image,
  UnorderedList,
  ListItem,
  Divider,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { IFormSubmit } from '../types';
import NO_IMG from '@/assets/no-img.jpg';

const Step3Info = ({ collection, fields }: IFormSubmit) => {
  const { t } = useTranslation();
  const dicPath = 'collections.popup.step3.';
  const borderColor = useColorModeValue('gray.400', 'gray.600');

  return (
    <VStack
      alignItems={'stretch'}
      border={'solid 1px'}
      borderColor={borderColor}
      borderRadius={8}
      p={4}
    >
      <Heading as="h5" size="xs">
        {t(dicPath + 'collection_title')}
      </Heading>
      <HStack alignItems={'flex-start'}>
        <Image
          borderRadius="full"
          boxSize="48px"
          minW="48px"
          src={collection.imageURL}
          fallbackSrc={NO_IMG}
          objectFit={'cover'}
          mt={2}
        />
        <VStack alignItems={'stretch'}>
          <Text fontSize="2xl">{collection.title}</Text>
          <Text>{collection.description}</Text>
        </VStack>
      </HStack>
      <Divider my={3} />
      <Heading as="h5" size="sm">
        {t(dicPath + 'items_title')}
      </Heading>
      <UnorderedList>
        <ListItem>{t(dicPath + 'name')}</ListItem>
        <ListItem>{t(dicPath + 'tags')}</ListItem>
      </UnorderedList>
      <UnorderedList>
        {fields.map((field, i) => (
          <ListItem key={i}>
            {field.name} ({t(`fields_types.${field.type}`)})
          </ListItem>
        ))}
      </UnorderedList>
    </VStack>
  );
};

export default Step3Info;
