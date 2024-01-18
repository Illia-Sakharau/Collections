import useAuth from '@/hooks/useAuth';
import { Flex, FlexProps, Tag, Text } from '@chakra-ui/react';

type Props = FlexProps;

const UserName = (props: Props) => {
  const { isAuth, user, isAdmin } = useAuth();

  return (
    <>
      {isAuth && (
        <Flex alignItems="center" {...props}>
          <Text fontSize="md">{user.name}</Text>
          {isAdmin && (
            <Tag size="sm" mb="3">
              Admin
            </Tag>
          )}
        </Flex>
      )}
    </>
  );
};

export default UserName;
