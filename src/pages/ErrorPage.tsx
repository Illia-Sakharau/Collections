import useAuth from '@/hooks/useAuth';
import { IResponseError } from '@/types/api';
import { useToast } from '@chakra-ui/react';
import { useRouteError } from 'react-router-dom';

export default () => {
  const error = useRouteError() as IResponseError;
  const toast = useToast();
  const { logoutAction, deadminAction } = useAuth();

  if (error.status === 401) {
    logoutAction();
    toast({
      description: error.data.message,
      status: 'error',
      position: 'bottom-left',
      duration: 10000,
      isClosable: true,
    });
  }
  if (error.status === 403) {
    deadminAction();
    toast({
      description: error.data.message,
      status: 'warning',
      position: 'bottom-left',
      duration: 10000,
      isClosable: true,
    });
  }

  return <div>ERROR PAGE</div>;
};
