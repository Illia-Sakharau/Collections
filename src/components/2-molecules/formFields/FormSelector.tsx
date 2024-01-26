import { FC } from 'react';
import { Select, SelectProps } from '@chakra-ui/react';
import FieldWrapper, { FieldWrapperProps } from './components/FieldWrapper';
import { useTranslation } from 'react-i18next';

type Props = {
  isLoading?: boolean;
  options: {
    value: string;
    text: string;
  }[];
} & SelectProps &
  Omit<FieldWrapperProps, 'children'>;

const FormSelector: FC<Props> = ({
  htmlFor,
  label,
  isRequired,
  errorText,
  helperText,
  formControlProps,
  options,
  isLoading,
  placeholder,
  ...selectProps
}) => {
  const { t } = useTranslation();

  return (
    <FieldWrapper
      htmlFor={htmlFor}
      label={label}
      isRequired={isRequired}
      errorText={errorText}
      helperText={helperText}
      formControlProps={formControlProps}
    >
      <Select
        id={htmlFor}
        name={htmlFor}
        focusBorderColor="brand.500"
        placeholder={isLoading ? t('other.loading') : placeholder}
        {...selectProps}
      >
        {!isLoading &&
          options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.text}
            </option>
          ))}
      </Select>
    </FieldWrapper>
  );
};

export default FormSelector;
