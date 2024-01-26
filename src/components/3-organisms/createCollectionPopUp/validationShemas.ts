import { TFunction } from 'i18next';
import * as Yup from 'yup';
import { Field } from './types';

const dic1Path = 'collections.popup.step1.validation.';
const dic2Path = 'collections.popup.step2.validation.';

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
    fields: Yup.array()
      .of(
        Yup.object({
          name: Yup.string()
            .required(t(dic2Path + 'name.required'))
            .max(80, t(dic2Path + 'name.max')),
          type: Yup.string().required(t(dic2Path + 'type.required')),
        })
      )
      .test('max-count-3', t(dic2Path + 'fields.max'), function () {
        const counter = { integer: 0, string: 0, text: 0, boolean: 0, date: 0 };
        this.parent.fields.forEach((item: Field) => {
          if (item.type) counter[item.type]++;
        });
        return Object.values(counter).every((val) => val < 4);
      }),
  });
