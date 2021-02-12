import styled from '@emotion/styled';
import { FormattedMessage } from 'react-intl';

import useToggle from '../../hooks/useToggle';

import Logo from '../Logo';

import Navbar from './Navbar';
import NavbarNav from './NavbarNav';
import NavGetStarted from './NavGetStarted';
import NavItem from './NavItem';
import NavToggle from './NavToggle';

const NavToggleWrapper = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
`;

const NavGetStartedWrapper = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: block;
  }
`;

const Nav = () => {
  const toggleNav = useToggle();

  return (
    <Navbar expand={toggleNav.active}>
      <Logo />
      <NavToggleWrapper>
        <NavToggle onClick={toggleNav.toggle} />
      </NavToggleWrapper>
      <NavbarNav expand={toggleNav.active}>
        <NavItem>
          <FormattedMessage id="Nav.Services" />
        </NavItem>
        <NavItem>
          <FormattedMessage id="Nav.Work" />
        </NavItem>
        <NavItem>
          <FormattedMessage id="Nav.AboutUs" />
        </NavItem>
      </NavbarNav>
      <NavGetStartedWrapper>
        <NavGetStarted>
          <FormattedMessage id="Nav.GetStarted" />
        </NavGetStarted>
      </NavGetStartedWrapper>
    </Navbar>
  );
};

export default Nav;
