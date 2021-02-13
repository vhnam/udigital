import { useAtom } from 'jotai';

import { closeToastAtom, derivedToastAtom } from '@/store/toast';

import Portal from '@/components/Portal';
import Toast from '@/components/Toast';

const ToastProvider = () => {
  const [stack] = useAtom(derivedToastAtom);
  const [, closeToast] = useAtom(closeToastAtom);

  return (
    <Portal
      mount={true}
      portalDataName={'toast-provider-gate'}
      aria-label="ToastProvider"
      aria-labelledby="toast-provider"
      role="status"
      aria-modal={true}
    >
      {stack.map((toast) => (
        <Toast
          key={`TOAST_${toast.id}`}
          {...toast.props}
          closeToast={() => closeToast(toast.id)}
          isOpen={toast.isOpen}
        />
      ))}
    </Portal>
  );
};

export default ToastProvider;
