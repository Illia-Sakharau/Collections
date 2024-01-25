import StepperMy from '@molecules/stepper/StepperMy';
import PopUp from '@molecules/PopUp';
import { useTranslation } from 'react-i18next';
import { useSteps } from '@chakra-ui/react';
import useDefSteps from './hooks/useDefSteps';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CreateCollectionPopUp = ({ isOpen, onClose }: Props) => {
  const { t } = useTranslation();
  const steps = useDefSteps();
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <PopUp
      isOpen={isOpen}
      onClose={onClose}
      title={t('collections.popup.title')}
      buttonText={t(`collections.popup.step${activeStep + 1}.btnText`)}
      action={async () => {
        await steps[activeStep].action();
        if (activeStep < steps.length - 1) {
          setActiveStep(activeStep + 1);
        } else {
          onClose();
        }
      }}
    >
      <StepperMy
        steps={steps}
        activeStep={activeStep}
        showDescription
        containerProps={{ mt: -4, mb: 8 }}
      />
      {steps[activeStep].component}
    </PopUp>
  );
};

export default CreateCollectionPopUp;
