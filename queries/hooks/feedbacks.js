import { useMutation } from 'react-query';

import { getErrorMessage } from '@/helpers/requests';

import useToast from '@/hooks/useToast';

import { createFeedback } from '@/queries/apis/feedbacks';

export const useCreateFeedback = () => {
  const toast = useToast();

  return useMutation(createFeedback, {
    onSuccess: (_) => {
      toast({
        title: 'Success',
        message: `Your feedback has been sent successfully!`,
        status: 'success',
      });
    },
    onError: (error) => {
      const err = getErrorMessage(error);
      toast({
        title: 'Error!',
        message: `${err.message}`,
        status: 'error',
      });
    },
  });
};
