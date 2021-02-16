import styled from '@emotion/styled';

import { Close } from '@/components/Icons';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: ${(props) => ('success' === props.status || 'error' === props.status ? '#fff' : '#000')};
  background-color: transparent;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.8;
  }
`;

const BtnClose = ({ status, onClick }) => (
  <Button status={status} onClick={onClick}>
    <Close />
  </Button>
);

export default BtnClose;
