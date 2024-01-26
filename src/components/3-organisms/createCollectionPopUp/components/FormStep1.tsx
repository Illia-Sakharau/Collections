import FormInput from '@/components/2-molecules/formFields/FormInput';
import { FormikProps } from 'formik';
import { useTranslation } from 'react-i18next';
import { IForm1 } from '../types';
import FormArea from '@/components/2-molecules/formFields/FormArea';
import FormSelector from '@/components/2-molecules/formFields/FormSelector';
import { useGetAllThemesQuery } from '@/API/themesAPI';
import useCurentLanguage from '@/hooks/useCurentLanguage';

type Props = {
  formik: FormikProps<IForm1>;
};

const FormStep1 = ({ formik }: Props) => {
  const { t } = useTranslation();
  const dicPath = 'collections.popup.step1.';
  const { data, isLoading } = useGetAllThemesQuery();
  const currentLang = useCurentLanguage();

  return (
    <form
      onSubmit={formik.handleSubmit}
      noValidate
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <FormInput
        isRequired
        label={t(dicPath + 'title_label')}
        htmlFor="title"
        type={'text'}
        placeholder={t(dicPath + 'title_placeholder')}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.title}
        errorText={formik.touched.title ? formik.errors.title : undefined}
      />
      <FormArea
        label={t(dicPath + 'description_label')}
        htmlFor="description"
        placeholder={t(dicPath + 'description_placeholder')}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.description}
        errorText={
          formik.touched.description ? formik.errors.description : undefined
        }
      />
      <FormSelector
        isRequired
        label={t(dicPath + 'theme_label')}
        htmlFor="theme"
        placeholder={t(dicPath + 'theme_placeholder')}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.theme}
        errorText={formik.touched.theme ? formik.errors.theme : undefined}
        isLoading={isLoading}
        options={
          data
            ? data.map((theme) => ({
                value: `${theme.id}`,
                text: theme[`${currentLang}_name`],
              }))
            : []
        }
      />
      <FormInput
        label={t(dicPath + 'imageURL_label')}
        htmlFor="imageURL"
        type={'text'}
        placeholder={t(dicPath + 'imageURL_placeholder')}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.imageURL}
        errorText={formik.touched.imageURL ? formik.errors.imageURL : undefined}
      />
    </form>
  );
};

export default FormStep1;
