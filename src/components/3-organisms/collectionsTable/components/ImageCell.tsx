import { Image } from '@chakra-ui/react';
import NO_IMG from '@/assets/no-img.jpg';

type Props = {
  imgUrl: string;
};

const ImageCell = ({ imgUrl }: Props) => {
  return (
    <Image
      borderRadius="full"
      boxSize="80px"
      minW="40px"
      src={imgUrl}
      fallbackSrc={NO_IMG}
      objectFit={'cover'}
    />
  );
};

export default ImageCell;
