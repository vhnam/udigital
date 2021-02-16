import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';

const NavGetStarted = styled.button`
  width: 8.75rem;
  height: 3rem;
  font-size: 1rem;
  color: #fff;
  line-height: 1.5rem;
  background-color: #30824E;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  border: none;
  outline: none;

  &:hover {
    background-color: ${rgba('#30824E', 0.6)};
  }

  &:active {
    background-color: ${rgba('#30824E', 0.8)};
  }
`;

export default NavGetStarted;
