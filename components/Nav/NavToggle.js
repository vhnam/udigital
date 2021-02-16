import styled from '@emotion/styled';

import { Menu } from '@/components/Icons';

const Wrapper = styled.button`
  color: #000;
  border: none;
  background-color: transparent;
  outline: #46b96f;
`;

const NavToggle = (props) => (
  <Wrapper aria-label="toggle-button" {...props}>
    <Menu />
  </Wrapper>
);

export default NavToggle;
