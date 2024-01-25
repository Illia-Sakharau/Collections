import { FC, useState } from 'react';
import {
  Input,
  InputGroup,
  InputProps,
} from '@chakra-ui/react';
import PasswordButton from './components/PasswordButton';
import FieldWrapper, { FieldWrapperProps } from './components/FieldWrapper';

type Props = {
  htmlFor: string;
  type: 'text' | 'email' | 'password';
} & Omit<InputProps, 'type'> & Omit<FieldWrapperProps, 'children'>;

const FormInput: FC<Props> = ({
  htmlFor,
  type,
  label,
  isRequired,
  errorText,
  helperText,
  formControlProps,
  ...inputProps
}) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <FieldWrapper 
      htmlFor={htmlFor}
      label={label}
      isRequired={isRequired}
      errorText={errorText}
      helperText={helperText}
      formControlProps={formControlProps}
  >

      <InputGroup>
        <Input
          id={htmlFor}
          name={htmlFor}
          type={isShow ? 'text' : type}
          pr={type === 'password' ? '10' : '4'}
          focusBorderColor="brand.500"
          {...inputProps}
        />
        {type === 'password' && (
          <PasswordButton isShow={isShow} action={() => setIsShow(!isShow)} />
        )}
      </InputGroup>
      </FieldWrapper>
  );
};

export default FormInput;
