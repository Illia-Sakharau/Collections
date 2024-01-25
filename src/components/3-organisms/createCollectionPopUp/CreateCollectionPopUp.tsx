import PopUp from '@molecules/PopUp';
import { useTranslation } from 'react-i18next';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CreateCollectionPopUp = ({ isOpen, onClose }: Props) => {
  const { t } = useTranslation();

  return (
    <PopUp
      isOpen={isOpen}
      onClose={onClose}
      title={t('collections.popup.title')}
      buttonText={t('collections.popup.step2.btnText')}
      action={() => {
        onClose();
      }}
    >
      123456
    </PopUp>
  );
};

export default CreateCollectionPopUp;
