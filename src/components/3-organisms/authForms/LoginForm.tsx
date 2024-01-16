import FormInput from '@/components/2-molecules/formInput/FormInput';
import useAuth from '@/hooks/useAuth';
import { useFormik } from 'formik';
import FormWrapper from './components/FormWrapper';
import { useTranslation } from 'react-i18next';
import { LoginSchema } from './validationShemas';

const LoginForm = () => {
  const { t } = useTranslation();
  const { loginAction } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema(t),
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      loginAction();
    },
  });
  return (
    <FormWrapper
      onSubmit={formik.handleSubmit}
      buttonText={t('login.submit_button')}
    >
      <FormInput
        isRequired
        label={t('login.email_label')}
        htmlFor="email"
        type={'email'}
        placeholder={t('login.email_placeholder')}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.email}
        errorText={formik.touched.email ? formik.errors.email : undefined}
      />
      <FormInput
        isRequired
        label={t('login.password_label')}
        htmlFor="password"
        type={'password'}
        placeholder={t('login.password_placeholder')}
        helperText={t('login.password_helper')}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.password}
        errorText={formik.touched.password ? formik.errors.password : undefined}
      />
    </FormWrapper>
  );
};

export default LoginForm;
