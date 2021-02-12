import { useCallback, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { FormattedMessage } from 'react-intl';

import useToggle from '../../hooks/useToggle';

import Logo from '../Logo';

import Navbar from './Navbar';
import NavbarNav from './NavbarNav';
import NavGetStarted from './NavGetStarted';
import NavItem from './NavItem';
import NavToggle from './NavToggle';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 71.25rem;
`;

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

const links = [
  {
    text: <FormattedMessage id="Nav.Services" />,
    link: '/#services',
  },
  {
    text: <FormattedMessage id="Nav.Work" />,
    link: '/#work',
  },
  {
    text: <FormattedMessage id="Nav.AboutUs" />,
    link: '/#about',
  },
];

const Nav = () => {
  const toggleNav = useToggle();

  const containerElement = useRef();

  const handleScroll = useCallback(() => {
    const navBarHeight = containerElement.current.clientHeight;
    const scrollY = window.scrollY;

    if (scrollY <= navBarHeight) {
      const percent = scrollY / navBarHeight;

      containerElement.current.style.backgroundColor = 0.2 < percent ? '#fff' : 'transparent';
      containerElement.current.style.boxShadow = 0 === percent ? 'none' : '0px 1px 4px rgb(0 0 0 / 10%)';
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <Navbar expand={toggleNav.active} ref={containerElement}>
      <Container>
        <Logo />
        <NavToggleWrapper>
          <NavToggle onClick={toggleNav.toggle} />
        </NavToggleWrapper>
        <NavbarNav expand={toggleNav.active}>
          {links.map((link, index) => (
            <NavItem key={index} href={link.link} content={link.text} />
          ))}
        </NavbarNav>
        <NavGetStartedWrapper>
          <NavGetStarted>
            <FormattedMessage id="Nav.GetStarted" />
          </NavGetStarted>
        </NavGetStartedWrapper>
      </Container>
    </Navbar>
  );
};

export default Nav;
