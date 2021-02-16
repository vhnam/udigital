import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const backgroundColor = (status) => {
  switch (status) {
    case 'success':
      return '#38A169';
    case 'error':
      return '#E53E3E';
    default:
      return '#fff';
  }
};

const Wrapper = styled(motion.div)`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 1rem;
  background-color: ${(props) => backgroundColor(props.status)};
  box-shadow: 0 10px 40px rgb(0 0 0 / 20%);
  border-radius: 0.25rem;
  z-index: 1050;

  @media (min-width: 768px) {
    bottom: 2.25rem;
    right: 2.25rem;
  }
`;

export default Wrapper;
