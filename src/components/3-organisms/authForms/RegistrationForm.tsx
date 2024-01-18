import FormInput from '@/components/2-molecules/formInput/FormInput';
import { Link } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import FormWrapper from './components/FormWrapper';
import { Trans, useTranslation } from 'react-i18next';
import { RegistrationSchema } from './validationShemas';
import FormCheckbox from '@molecules/FormCheckbox';
import useAuth from '@/hooks/useAuth';

const RegistrationForm = () => {
  const { t } = useTranslation();
  const { registrationAction, registrationProps } = useAuth();
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      tc: false,
    },
    validationSchema: RegistrationSchema(t),
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      const { username, email, password } = values;
      registrationAction({ name: username, email, password });
    },
  });
  return (
    <FormWrapper
      onSubmit={formik.handleSubmit}
      buttonText={t('registration.submit_button')}
      isLoading={registrationProps.isLoading}
    >
      <FormInput
        isRequired
        label={t('registration.username_label')}
        htmlFor="username"
        type={'text'}
        placeholder={t('registration.username_placeholder')}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.username}
        errorText={formik.touched.username ? formik.errors.username : undefined}
      />
      <FormInput
        isRequired
        label={t('registration.email_label')}
        htmlFor="email"
        type={'email'}
        placeholder={t('registration.email_placeholder')}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.email}
        errorText={formik.touched.email ? formik.errors.email : undefined}
      />
      <FormInput
        isRequired
        label={t('registration.password_label')}
        htmlFor="password"
        type={'password'}
        placeholder={t('registration.password_placeholder')}
        helperText={t('registration.password_helper')}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.password}
        errorText={formik.touched.password ? formik.errors.password : undefined}
      />

      <FormCheckbox
        id="tc"
        name="tc"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        isChecked={formik.values.tc}
        mt={4}
        errorText={formik.touched.tc ? formik.errors.tc : undefined}
      >
        <Trans i18nKey="registration.tc">
          I have read and agree to the
          <Link to="#some-link" as={NavLink} color="brand.500">
            terms & conditions
          </Link>
          .
        </Trans>
      </FormCheckbox>
    </FormWrapper>
  );
};

export default RegistrationForm;
