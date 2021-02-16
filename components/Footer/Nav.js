import styled from '@emotion/styled';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';

import { H6 } from '@/components/Typography';

const Wrapper = styled.div`
  text-align: center;

  @media (min-width: 992px) {
    flex: 0 0 auto;
    padding-left: 3rem;
    padding-right: 0.5rem;
    width: 20%;
    text-align: left;
  }
`;

const ExtendedH3 = H6.withComponent('h3');

const Heading = styled(ExtendedH3)`
  margin-top: 3rem;
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    margin-top: 0;
  }
`;

const List = styled.ul`
  padding: 0;
  list-style-type: none;
`;

const Item = styled.li`
  margin-bottom: 1rem;
`;

const A = styled.a`
  font-size: 0.875rem;
  font-weight: 300;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.8;
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

const Branding = () => (
  <Wrapper>
    <Heading>
      <FormattedMessage id="Footer.Company" />
    </Heading>
    <List>
      {links.map((link, index) => (
        <Item key={index}>
          <Link href={link.link}>
            <A title={link.text}>{link.text}</A>
          </Link>
        </Item>
      ))}
    </List>
  </Wrapper>
);

export default Branding;
