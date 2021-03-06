import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { disableScroll, enableScroll } from '@/helpers/behaviors';

import BtnClose from '@/components/Modal/BtnClose';
import Container from '@/components/Modal/Container';
import Content from '@/components/Modal/Content';
import Header from '@/components/Modal/Header';
import Overlay from '@/components/Modal/Overlay';
import Title from '@/components/Modal/Title';

const containerVariants = {
  initial: { top: 'calc(50% - 50px)', transition: { type: 'spring', duration: '0.3' } },
  isOpen: { top: '50%', transition: { type: 'spring', duration: '0.3' } },
};

const modalVariants = {
  initial: { opacity: 0, transition: { type: 'spring', duration: '0.3' } },
  isOpen: { opacity: 1, transition: { type: 'spring', duration: '0.3' } },
};

const Modal = ({ isOpen, title, children, closeModal }) => {
  const [mountDownTarget, setMountDownTarget] = useState(null);

  const handleOverlayClick = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    if (mountDownTarget !== e.target) {
      return;
    }

    setMountDownTarget(null);

    if (closeModal) {
      closeModal();
    }
  };

  const handleOverlayMouseDown = (e) => {
    setMountDownTarget(e.target);
  };

  useEffect(() => {
    if (isOpen) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => {
      enableScroll();
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      <Overlay
        initial="initial"
        animate="isOpen"
        exit="exit"
        variants={modalVariants}
        onMouseDown={handleOverlayMouseDown}
        onClick={handleOverlayClick}
      >
        <Container initial="initial" animate="isOpen" exit="exit" variants={containerVariants}>
          <Header>
            <Title>{title}</Title>
            <BtnClose onClick={closeModal} />
          </Header>
          <Content>{children}</Content>
        </Container>
      </Overlay>
    </AnimatePresence>
  );
};

export default Modal;
