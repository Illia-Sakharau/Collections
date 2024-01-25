import { FC } from 'react';
import { Select, SelectProps } from '@chakra-ui/react';
import FieldWrapper, { FieldWrapperProps } from './components/FieldWrapper';

type Props = {
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
  ...selectProps
}) => {
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
        {...selectProps}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.text}
          </option>
        ))}
      </Select>
    </FieldWrapper>
  );
};

export default FormSelector;
