import FormInput from '@/components/2-molecules/formInput/FormInput';
import { Checkbox, Link } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import FormWrapper from './components/FormWrapper';
import { Trans, useTranslation } from 'react-i18next';

const RegistrationForm = () => {
  const { t } = useTranslation();
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
    <FormWrapper
      onSubmit={formik.handleSubmit}
      buttonText={t('registration.submit_button')}
    >
      <FormInput
        isRequired
        label={t('registration.username_label')}
        htmlFor="username"
        type={'text'}
        placeholder={t('registration.username_placeholder')}
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      <FormInput
        isRequired
        label={t('registration.email_label')}
        htmlFor="email"
        type={'email'}
        placeholder={t('registration.email_placeholder')}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <FormInput
        isRequired
        label={t('registration.password_label')}
        htmlFor="password"
        type={'password'}
        placeholder={t('registration.password_placeholder')}
        helperText={t('registration.password_helper')}
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
        <Trans i18nKey="registration.tc">
          I have read and agree to the
          <Link to="#some-link" as={NavLink} color="brand.500">
            terms & conditions
          </Link>
          .
        </Trans>
      </Checkbox>
    </FormWrapper>
  );
};

export default RegistrationForm;
