import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Content from '@/components/Toast/Content';
import Title from '@/components/Toast/Title';
import Wrapper from '@/components/Toast/Wrapper';
import BtnClose from '@/components/Toast/BtnClose';
import Header from '@/components/Toast/Header';

const toastVariants = {
  initial: { opacity: 0, y: 50, scale: 0.3 },
  isOpen: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 20, scale: 0.5 },
};

const duration = 3500;

const Toast = ({ title, message, status, closeToast }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      closeToast();
    }, duration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [closeToast]);

  return (
    <AnimatePresence>
      <Wrapper
        layout={true}
        initial="initial"
        animate="isOpen"
        exit="exit"
        variants={toastVariants}
        role="status"
        status={status}
      >
        <Header>
          <Title status={status}>{title}</Title>
          <BtnClose status={status} onClick={closeToast} />
        </Header>
        <Content status={status}>{message}</Content>
      </Wrapper>
    </AnimatePresence>
  );
};

export default Toast;
