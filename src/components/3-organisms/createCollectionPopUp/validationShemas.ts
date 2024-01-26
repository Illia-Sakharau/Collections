import { TFunction } from 'i18next';
import * as Yup from 'yup';

const dic1Path = 'collections.popup.step1.validation.';

export const Step1Schema = (t: TFunction) =>
  Yup.object({
    title: Yup.string()
      .required(t(dic1Path + 'title.required'))
      .max(100, t(dic1Path + 'title.max')),
    description: Yup.string().max(256, t(dic1Path + 'description.max')),
    theme: Yup.string().required(t(dic1Path + 'theme.required')),
    imageURL: Yup.string().matches(
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g,
      {
        message: t(dic1Path + 'imageURL.url'),
      }
    ),
  });

export const Step2Schema = (t: TFunction) =>
  Yup.object({
    fields: Yup.array().of(
      Yup.object({
        name: Yup.string()
          .required(t(dic1Path + 'title.required'))
          .max(80, t(dic1Path + 'title.max')),
        type: Yup.string().required(t(dic1Path + 'theme.required')),
      })
    ),
  });
