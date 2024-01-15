import FormInput from '@/components/2-molecules/formInput/FormInput';
import useAuth from '@/hooks/useAuth';
import { useFormik } from 'formik';
import FormWrapper from './components/FormWrapper';

const LoginForm = () => {
  const { loginAction } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      loginAction();
    },
  });
  return (
    <FormWrapper onSubmit={formik.handleSubmit} buttonText={'Login'}>
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
    </FormWrapper>
  );
};

export default LoginForm;
