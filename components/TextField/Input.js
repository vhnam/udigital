import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';

const Input = styled.input`
  padding: 1rem 2.25rem;
  width: 100%;
  font-size: 1rem;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #545454;
  outline: none;

  &:disabled {
    background-color: ${rgba('#aaa', 0.2)};
  }
`;

export default Input;
