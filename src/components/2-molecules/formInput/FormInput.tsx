import { FC, useState } from 'react';
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
} from '@chakra-ui/react';
import PasswordButton from './components/PasswordButton';

type Props = {
  label: string;
  isRequired?: boolean;
  type: 'text' | 'email' | 'password';
  errorText?: string;
  helperText?: string;
  formControlProps?: FormControlProps;
} & Omit<InputProps, 'type'>;

const FormInput: FC<Props> = ({
  label,
  type,
  isRequired = false,
  errorText,
  helperText,
  formControlProps,
  ...inputProps
}) => {
  const [isShow, setIsShow] = useState(false);
  const name = label.trim().toLocaleLowerCase().replaceAll(' ', '-');

  return (
    <FormControl
      isRequired={isRequired}
      isInvalid={!!errorText}
      {...formControlProps}
    >
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <InputGroup>
        <Input
          id={name}
          name={name}
          type={isShow ? 'text' : type}
          pr={type === 'password' ? '10' : '4'}
          focusBorderColor="brand.500"
          {...inputProps}
        />
        {type === 'password' && (
          <PasswordButton isShow={isShow} action={() => setIsShow(!isShow)} />
        )}
      </InputGroup>
      {!errorText ? (
        <FormHelperText>{helperText}</FormHelperText>
      ) : (
        <FormErrorMessage>{errorText}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default FormInput;
