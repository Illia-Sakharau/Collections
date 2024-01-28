import { ICreateColletionReques, IFieldsMap } from '@/types/api';
import { IFormSubmit } from '../types';
import { FIELDS_TYPES } from '../components/FormAdditionalField';

export default ({
  collection,
  fields,
}: IFormSubmit): ICreateColletionReques => {
  const { title, description, theme, imageURL: image_url } = collection;

  const collectionInfo = {
    title: title as string,
    description,
    theme_id: Number(theme),
    image_url,
  };

  const fieldsMap: IFieldsMap = FIELDS_TYPES.reduce((accumulator, type) => {
    const arrWithOneType = fields.filter((field) => field.type === type);
    const fildsMapOneType = arrWithOneType.reduce((acc, field, i) => {
      return { ...acc, [`${field.type}_${i + 1}`]: field.name };
    }, {});

    return { ...accumulator, ...fildsMapOneType };
  }, {});

  return {
    collectionInfo,
    fieldsMap,
  };
};
