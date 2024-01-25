import StepperMy from '@molecules/stepper/StepperMy';
import PopUp from '@molecules/PopUp';
import { useTranslation } from 'react-i18next';
import { useSteps } from '@chakra-ui/react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const steps = [
  { title: 'First', description: 'Contact Info' },
  { title: 'Second', description: 'Date & Time' },
  { title: 'Third', description: 'Select Rooms' },
];

const CreateCollectionPopUp = ({ isOpen, onClose }: Props) => {
  const { t } = useTranslation();
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <PopUp
      isOpen={isOpen}
      onClose={onClose}
      title={t('collections.popup.title')}
      buttonText={t('collections.popup.step2.btnText')}
      action={() => {
        setActiveStep(activeStep + 1);
      }}
    >
      <StepperMy
        steps={steps}
        activeStep={activeStep}
        showDescription
        containerProps={{ mt: -4, mb: 8 }}
      />
      {steps[activeStep].description}
    </PopUp>
  );
};

export default CreateCollectionPopUp;
