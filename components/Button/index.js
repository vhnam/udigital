import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';

const Button = styled.button`
  display: inline-block;
  width: 100%;
  padding: 1rem;
  background-color: #30824e;
  color: #fff;
  font-weight: 500;
  box-shadow: 0 10px 22px rgb(172 246 199 / 90%);
  border: none;

  &:hover {
    background-color: ${rgba('#30824E', 0.6)};
  }

  &:active {
    background-color: ${rgba('#30824E', 0.8)};
  }

  &:disabled {
    background-color: #aaaaaa;
    box-shadow: 0 10px 22px rgb(170 170 170 / 90%);
  }
`;

export default Button;
