import { Button, VStack } from '@chakra-ui/react';
import Step2Text from './Step2Text';
import { useTranslation } from 'react-i18next';
import { FaPlus } from 'react-icons/fa';
import { FieldArray, Form, Formik, FormikProps } from 'formik';
import { IForm2 } from '../types';
import FormAdditionalField from './FormAdditionalField';
import { Ref } from 'react';
import { Step2Schema } from '../validationShemas';

type Props = {
  formRef: Ref<FormikProps<IForm2>>;
  onSubmit: (values: IForm2) => Promise<void>;
  initialValues: IForm2;
};

const FormStep2 = ({ formRef, onSubmit, initialValues }: Props) => {
  const { t } = useTranslation();
  const dicPath = 'collections.popup.step2.';

  return (
    <VStack alignItems={'stretch'} gap={8}>
      <Step2Text />

      <Formik
        innerRef={formRef}
        initialValues={initialValues}
        validationSchema={Step2Schema(t)}
        onSubmit={onSubmit}
      >
        {({ values, errors }) => (
          <Form
            noValidate
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <FieldArray name="fields">
              {({ remove, push }) => (
                <>
                  {values.fields.length > 0 &&
                    values.fields.map((_field, index) => {
                      const fieldError = errors.fields
                        ? errors.fields[index]
                        : undefined;
                      return (
                        <FormAdditionalField
                          key={index}
                          index={index}
                          remove={remove}
                          errors={fieldError}
                        />
                      );
                    })}

                  <Button
                    leftIcon={<FaPlus />}
                    colorScheme="brand"
                    variant="outline"
                    onClick={() => push({ name: '', type: '' })}
                  >
                    {t(dicPath + 'add_field_btn')}
                  </Button>
                </>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
    </VStack>
  );
};

export default FormStep2;
