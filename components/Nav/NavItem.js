import styled from '@emotion/styled';
import Link from 'next/link';

const Li = styled.li`
  padding: 1rem;

  @media (min-width: 768px) {
    padding-left: 2.25rem;
    padding-right: 2.25rem;
  }
`;

const A = styled.a`
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
`;

const NavItem = ({ href, content }) => (
  <Li>
    <Link href={href}>
      <A>{content}</A>
    </Link>
  </Li>
);

export default NavItem;
