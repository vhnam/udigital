import { useMutation } from 'react-query';

import { getErrorMessage } from '@/helpers/requests';

import useToast from '@/hooks/useToast';

import { createFeedback } from '@/queries/apis/feedbacks';

export const useCreateFeedback = () => {
  const { mutateAsync } = useMutation(createFeedback);

  const toast = useToast();

  return (data) => {
    return new Promise((resolve, reject) => {
      mutateAsync(data)
        .then(() => {
          toast({
            title: 'Success',
            message: `Your feedback has been sent successfully!`,
            status: 'success',
          });
          resolve();
        })
        .catch((error) => {
          const err = getErrorMessage(error.response);
          toast({
            title: 'Error!',
            message: `${err}`,
            status: 'error',
          });
          reject(error.response);
        });
    });
  };
};
