import {
  Stack,
  StackProps,
  Step,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper,
  Text,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

type Props = {
  steps: { title: string }[];
  activeStep: number;
  showDescription?: boolean;
  containerProps?: StackProps;
};

const StepperMy = ({
  steps,
  activeStep,
  showDescription,
  containerProps,
}: Props) => {
  const { t } = useTranslation();
  const activeStepText = steps[activeStep].title;
  return (
    <Stack {...containerProps}>
      {showDescription && (
        <Text>
          {t('other.step')} {activeStep + 1}: <b>{activeStepText}</b>
        </Text>
      )}
      <Stepper size="sm" index={activeStep} colorScheme="brand">
        {steps.map((step) => (
          <Step key={step.title}>
            <StepIndicator>
              <StepStatus complete={<StepIcon />} />
            </StepIndicator>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};

export default StepperMy;
