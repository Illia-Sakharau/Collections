import { FC, ReactNode } from 'react';
import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

type Props = {
  children: ReactNode;
  errorText?: string;
  helperText?: string;
  formControlProps?: FormControlProps;
} & CheckboxProps;

const FormCheckbox: FC<Props> = ({
  children,
  errorText,
  helperText,
  formControlProps,
  ...checkboxProps
}) => {
  return (
    <FormControl isInvalid={!!errorText} {...formControlProps}>
      <Checkbox
        colorScheme="brand"
        alignSelf="stretch"
        isInvalid={!!errorText}
        {...checkboxProps}
      >
        {children}
      </Checkbox>
      {!errorText ? (
        <FormHelperText>{helperText}</FormHelperText>
      ) : (
        <FormErrorMessage>{errorText}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default FormCheckbox;
