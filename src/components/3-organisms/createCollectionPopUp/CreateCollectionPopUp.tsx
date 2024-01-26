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
  const onBtnClick = async () => {
    const doNext = steps[activeStep].action();
    if (doNext) {
      if (activeStep < steps.length - 1) {
        setActiveStep(activeStep + 1);
      } else {
        setActiveStep(0);
        onClose();
      }
    }
  };

  return (
    <PopUp
      isOpen={isOpen}
      onClose={onClose}
      title={t('collections.popup.title')}
      buttonText={t(`collections.popup.step${activeStep + 1}.btnText`)}
      action={onBtnClick}
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
