import FormInput from '@/components/2-molecules/formInput/FormInput';
import { Checkbox, Link } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import FormWrapper from './components/FormWrapper';

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      tc: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <FormWrapper onSubmit={formik.handleSubmit} buttonText={'Registration'}>
      <FormInput
        isRequired
        label={'Full name'}
        htmlFor="username"
        type={'text'}
        placeholder="Type your full name"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      <FormInput
        isRequired
        label={'Email'}
        htmlFor="email"
        type={'email'}
        placeholder="Type your email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <FormInput
        isRequired
        label={'Password'}
        htmlFor="password"
        type={'password'}
        placeholder="Type a new password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <Checkbox
        id="tc"
        name="tc"
        colorScheme="brand"
        alignSelf="stretch"
        onChange={formik.handleChange}
        isChecked={formik.values.tc}
        mt={4}
      >
        I have read and agree to the{' '}
        <Link to="#some-link" as={NavLink} color="brand.500">
          terms & conditions
        </Link>
        .
      </Checkbox>
    </FormWrapper>
  );
};

export default RegistrationForm;
