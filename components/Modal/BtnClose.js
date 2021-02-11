import styled from '@emotion/styled';

import { Close } from '../Icons';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
`;

const BtnClose = ({ onClick }) => (
  <Button onClick={onClick}>
    <Close />
  </Button>
);

export default BtnClose;
