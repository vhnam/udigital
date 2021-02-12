import styled from '@emotion/styled';

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background-color: ${(props) => (props.expand ? '#fff' : 'transparent')};
  transition: background-color 100ms ease-out;
  z-index: 10000;

  @media (min-width: 768px) {
    padding-left: 2.25rem;
    padding-right: 2.25rem;
  }
`;

export default Navbar;
