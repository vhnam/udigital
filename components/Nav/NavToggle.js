import styled from '@emotion/styled';

import {Menu} from '../Icons';

const Wrapper = styled.button`
  color: #000;
  border: none;
  background-color: transparent;
  outline: #46b96f;
`;

const NavToggle = (props) => (
  <Wrapper {...props}>
    <Menu />
  </Wrapper>
);

export default NavToggle;
