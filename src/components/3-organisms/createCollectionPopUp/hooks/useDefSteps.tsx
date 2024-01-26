import { useTranslation } from 'react-i18next';
import FormStep1 from '../components/FormStep1';
import FormStep2 from '../components/FormStep2';
import { FormikProps, useFormik } from 'formik';
import { IForm1, IForm2, IFormSubmit } from '../types';
import { ReactNode, useRef, useState } from 'react';
import Step3Info from '../components/Step3Info';
import { Step1Schema } from '../validationShemas';

const initialForm1: IForm1 = {
  title: '',
  description: '',
  theme: '',
  imageURL: '',
};
const initialForm2: IForm2 = {
  fields: [],
};

type Return = {
  title: string;
  component: ReactNode;
  action: () => boolean;
}[];

export default (): Return => {
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
    validationSchema: Step1Schema(t),
    onSubmit: onSubmitStep1,
  });

  return [
    {
      title: t('collections.popup.step1.title'),
      component: <FormStep1 formik={formikStep1} />,
      action: () => {
        formikStep1.handleSubmit();
        return formikStep1.isValid && formikStep1.dirty;
      },
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
      action: () => {
        if (form2Ref.current) {
          form2Ref.current.handleSubmit();
        }
        return !!form2Ref.current?.isValid;
      },
    },
    {
      title: t('collections.popup.step3.title'),
      component: <Step3Info {...state} />,
      action: () => {
        onCreate();
        return true;
      },
    },
  ];
};
