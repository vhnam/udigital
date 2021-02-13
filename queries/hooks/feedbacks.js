import { useMutation } from 'react-query';

import { getErrorMessage } from '@/helpers/requests';

import { createFeedback } from '@/queries/apis/feedbacks';

export const useCreateFeedback = () => {
  return useMutation(createFeedback, {
    onSuccess: (_) => {
      // toast({
      //   title: 'Success',
      //   description: `Your feedback has been sent successfully!`,
      //   status: 'success',
      // });
    },
    onError: (error) => {
      const err = getErrorMessage(error);
      console.log(err);

      // toast({
      //   title: 'Error!',
      //   description: `${err.message}`,
      //   status: 'error',
      // });
    },
  });
};
