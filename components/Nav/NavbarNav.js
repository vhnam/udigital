import styled from '@emotion/styled';

const NavbarNav = styled.ul`
  position: absolute;
  top: 4.75rem;
  left: 0;
  right: 0;
  display: ${(props) => (props.expand ? 'block' : 'none')};
  padding-left: 0;
  padding-bottom: 1rem;
  margin: 0;
  list-style-type: none;
  background-color: #fff;

  @media (min-width: 992px) {
    position: static;
    display: inline-flex;
    align-items: center;
    background-color: transparent;
  }
`;

export default NavbarNav;
