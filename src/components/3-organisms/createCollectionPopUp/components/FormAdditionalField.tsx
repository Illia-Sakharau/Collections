import {
  IconButton,
  Input,
  InputGroup,
  Select,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Field, FormikErrors } from 'formik';
import { useTranslation } from 'react-i18next';
import { FaTrashAlt } from 'react-icons/fa';

const FIELDS_TYPES = ['integer', 'string', 'text', 'boolean', 'date'];

type Props = {
  index: number;
  remove: (index: number) => undefined;
  errors?: FormikErrors<{ name: string; type: string }>;
};

const FormAdditionalField = ({ index, remove, errors }: Props) => {
  const { t } = useTranslation();
  const dicPath = 'collections.popup.step2.';
  const errorText = errors
    ? (errors.name ? errors.name + '. ' : '') + (errors.type ? errors.type : '')
    : undefined;

  return (
    <FormControl isInvalid={!!errorText}>
      <InputGroup gap={4}>
        <Input
          as={Field}
          name={`fields.${index}.name`}
          type={'text'}
          focusBorderColor="brand.500"
          placeholder={t(dicPath + 'name_placeholder')}
        />

        <Select
          as={Field}
          component="select"
          id={`fields.${index}.type`}
          name={`fields.${index}.type`}
          focusBorderColor="brand.500"
          placeholder={t(dicPath + 'type_placeholder')}
        >
          {FIELDS_TYPES.map((type) => (
            <option key={type} value={type}>
              {t(`fields_types.${type}`)}
            </option>
          ))}
        </Select>
        <IconButton
          colorScheme="negative"
          variant="outline"
          onClick={() => remove(index)}
          aria-label={t(dicPath + 'delete_btn')}
          icon={<FaTrashAlt />}
        />
      </InputGroup>
      <FormErrorMessage>{errorText}</FormErrorMessage>
    </FormControl>
  );
};

export default FormAdditionalField;
