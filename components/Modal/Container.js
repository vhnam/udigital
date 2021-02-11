import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% - 2rem);
  max-width: 40rem;
  min-height: 10%;
  max-height: 90%;
  background-color: #fff;
  transform: translate(-50%, -50%);
  border-radius: 0.25rem;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export default Container;
