import { TFunction } from 'i18next';
import * as Yup from 'yup';

export const LoginSchema = (t: TFunction) =>
  Yup.object({
    email: Yup.string()
      .required(t('login.validation.email.required'))
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, {
        message: t('login.validation.email.invalid'),
      }),
    password: Yup.string()
      .required(t('login.validation.password.required'))
      .min(8, t('login.validation.password.min')),
  });

export const RegistrationSchema = (t: TFunction) =>
  Yup.object({
    username: Yup.string().required(
      t('registration.validation.username.required')
    ),
    email: Yup.string()
      .required(t('registration.validation.email.required'))
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, {
        message: t('registration.validation.email.invalid'),
      }),
    password: Yup.string()
      .required(t('registration.validation.password.required'))
      .min(8, t('registration.validation.password.min')),
    tc: Yup.boolean().isTrue(t('registration.validation.tc.required')),
  });
