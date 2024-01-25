import { FC } from 'react';
import { Textarea, TextareaProps } from '@chakra-ui/react';
import FieldWrapper, { FieldWrapperProps } from './components/FieldWrapper';

type Props = TextareaProps & Omit<FieldWrapperProps, 'children'>;

const FormArea: FC<Props> = ({
  htmlFor,
  label,
  isRequired,
  errorText,
  helperText,
  formControlProps,

  ...textAreaProps
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
      <Textarea
        id={htmlFor}
        name={htmlFor}
        focusBorderColor="brand.500"
        {...textAreaProps}
      />
    </FieldWrapper>
  );
};

export default FormArea;
