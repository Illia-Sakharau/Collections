import { useTranslation } from 'react-i18next';
import FormStep1 from '../components/FormStep1';
import FormStep2 from '../components/FormStep2';
import { FormikProps, useFormik } from 'formik';
import { IForm1, IForm2, IFormSubmit } from '../types';
import { useState } from 'react';

const initialForm1: IForm1 = {
  title: '',
  description: '',
  theme: '',
}
const initialForm2: IForm2 = {
  title: '',
}

export default () => {
  const { t } = useTranslation();
  const [state, setState] = useState<IFormSubmit>({
    collection: initialForm1,
    fields: initialForm2
  });

  const onSubmitStep1 = async (values: IForm1) => {
    setState({...state, collection: values})
  }

  const formikStep1: FormikProps<IForm1> = useFormik<IForm1>({
    initialValues: state.collection,
    onSubmit: onSubmitStep1,
  });

  const steps = [
    {
      title: t('collections.popup.step1.title'),
      component: <FormStep1 formik={formikStep1}/>,
      action: formikStep1.handleSubmit,
    },
    {
      title: t('collections.popup.step2.title'),
      component: <FormStep2 />,
      action: async () => {

        console.log(state);

        formikStep1.resetForm({})
        setState({
          collection: initialForm1,
          fields: initialForm2
        })
      },
    },
  ];
  return steps;
};
