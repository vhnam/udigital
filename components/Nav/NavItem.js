import styled from '@emotion/styled';

const NavItem = styled.li`
  padding: 1rem;
  font-size: 1rem;
  font-weight: 300;
  color: #000;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    padding-left: 2.25rem;
    padding-right: 2.25rem;
  }
`;

export default NavItem;
