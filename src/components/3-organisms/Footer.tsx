import { useColorModeValue, Text, Flex, IconButton } from '@chakra-ui/react';
import SectionWrapper from '../1-atoms/SectionWrapper';
import { FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa';

const CONTACTS = [
  {
    label: 'Link to GitHub',
    link: 'https://github.com/Illia-Sakharau',
    icon: <FaGithub />,
  },
  {
    label: 'Link to LinkedIn',
    link: 'https://linkedin.com/in/sakharoviliya0204',
    icon: <FaLinkedinIn />,
  },
  {
    label: 'Link to Telegram',
    link: 'https://t.me/IlliaSakharau',
    icon: <FaTelegram />,
  },
];

const Footer = () => {
  const bg = useColorModeValue('gray.400', 'gray.900');

  return (
    <SectionWrapper
      sectionProps={{
        bg,
        borderTop: 'solid 1px gray',
      }}
      containerProps={{
        py: '4',
        display: 'flex',
        alignItems: 'center',
        gap: '8',
        flexDir: { base: 'column-reverse', md: 'row' },
        justifyContent: 'space-between',
      }}
    >
      <Text opacity="0.6">© 2024 Coll's. All rights reserved</Text>
      <Flex
        gap="4"
        alignItems="center"
        flexDir={{ base: 'column', md: 'row' }}
        opacity="0.6"
        _hover={{ opacity: '1' }}
      >
        <Text>Created by: Illia Sakharau</Text>

        <Flex gap="2">
          {CONTACTS.map((item) => (
            <IconButton
              key={item.link}
              as="a"
              href={item.link}
              target="_blank"
              aria-label={item.label}
              icon={item.icon}
              size="sm"
              fontSize="xl"
              isRound
            />
          ))}
        </Flex>
      </Flex>
    </SectionWrapper>
  );
};

export default Footer;
