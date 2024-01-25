import { FC, ReactNode } from 'react';
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/react';

export type FieldWrapperProps = {
  children: ReactNode;
  label: string;
  htmlFor: string;
  isRequired?: boolean;
  errorText?: string;
  helperText?: string;
  formControlProps?: FormControlProps;
};

const FieldWrapper: FC<FieldWrapperProps> = ({
  label,
  htmlFor,
  isRequired = false,
  errorText,
  helperText,
  formControlProps,
  children
}) => {

  return (
    <FormControl
      isRequired={isRequired}
      isInvalid={!!errorText}
      {...formControlProps}
    >
      <FormLabel htmlFor={htmlFor}>{label}</FormLabel>
      {children}
      {!errorText ? (
        <FormHelperText>{helperText}</FormHelperText>
      ) : (
        <FormErrorMessage>{errorText}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default FieldWrapper;
