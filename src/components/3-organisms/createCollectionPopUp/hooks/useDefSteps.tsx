import { useTranslation } from 'react-i18next';
import FormStep1 from '../components/FormStep1';
import FormStep2 from '../components/FormStep2';
import { FormikProps, useFormik } from 'formik';
import { IForm1, IForm2, IFormSubmit } from '../types';
import { useRef, useState } from 'react';

const initialForm1: IForm1 = {
  title: '',
  description: '',
  theme: '',
  imageURL: ''
};
const initialForm2: IForm2 = {
  fields: [],
};

export default () => {
  const { t } = useTranslation();
  const [state, setState] = useState<IFormSubmit>({
    collection: initialForm1,
    ...initialForm2,
  });
  const form2Ref = useRef<FormikProps<IForm2>>(null);

  const onSubmitStep1 = async (values: IForm1) => {
    setState({ ...state, collection: values });
  };

  const onSubmitStep2 = async (values: IForm2) => {
    setState({ ...state, ...values });
  };

  const onCreate = async () => {
    console.log(state);

    formikStep1.resetForm({});
    form2Ref.current?.resetForm({});
    setState({
      collection: initialForm1,
      ...initialForm2,
    });
  };

  const formikStep1: FormikProps<IForm1> = useFormik<IForm1>({
    initialValues: state.collection,
    onSubmit: onSubmitStep1,
  });

  const steps = [
    {
      title: t('collections.popup.step1.title'),
      component: <FormStep1 formik={formikStep1} />,
      action: formikStep1.handleSubmit,
    },
    {
      title: t('collections.popup.step2.title'),
      component: (
        <FormStep2
          onSubmit={onSubmitStep2}
          formRef={form2Ref}
          initialValues={initialForm2}
        />
      ),
      action: (form2Ref.current as FormikProps<IForm2>).handleSubmit,
    },
    {
      title: t('collections.popup.step3.title'),
      component: <div>123</div>,
      action: onCreate,
    },
  ];
  return steps;
};
