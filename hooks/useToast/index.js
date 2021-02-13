import { useAtom } from 'jotai';

import { showToastAtom } from '@/store/toast';

const useToast = () => {
  const [, showToast] = useAtom(showToastAtom);

  const createToast = ({ title, message, status }) => {
    showToast({ props: { title, message, status } });
  };

  return createToast;
};

export default useToast;
