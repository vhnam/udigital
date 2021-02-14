import styled from '@emotion/styled';

import { Behance, Dribbble, Facebook, LinkedIn, Twitter, Instagram } from '@/components/Icons';
import { H5 } from '@/components/Typography';

const Wrapper = styled.div`
  margin-top: 3rem;
  text-align: center;

  @media (min-width: 992px) {
    flex: 0 0 auto;
    margin-top: 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    width: 40%;
    text-align: left;
  }
`;

const ExtendH5 = H5.withComponent('div');

const Info = styled(ExtendH5)`
  margin: 0.5rem 0;
  font-weight: 300;
  color: #545454;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 1rem auto 0;
  max-width: 16rem;
  list-style-type: none;

  @media (min-width: 992px) {
    margin-left: inherit;
    margin-right: inherit;
  }
`;

const Item = styled.li`
  margin-bottom: 1rem;
  font-size: 0.875rem;
  font-weight: 300;
`;

const A = styled.a`
  color: #646464;
  cursor: pointer;

  &:hover {
    color: #32b260;
  }
`;

const links = [
  {
    name: 'Behance',
    icon: <Behance />,
    link: 'https://www.behance.net/uddoktagiridigital',
  },
  {
    name: 'Dribbble',
    icon: <Dribbble />,
    link: 'http://digital.uddoktagiri.com',
  },
  {
    name: 'Facebook',
    icon: <Facebook />,
    link: 'https://www.facebook.com/uddoktagiridigital/',
  },
  {
    name: 'LinkedIn',
    icon: <LinkedIn />,
    link: 'https://www.linkedin.com/company/uddoktagiridigital/',
  },
  {
    name: 'Twitter',
    icon: <Twitter />,
    link: 'https://twitter.com/UddoktagiriDigi',
  },
  {
    name: 'Instagram',
    icon: <Instagram />,
    link: 'https://www.instagram.com/digitaluddoktagiri/',
  },
];

const Branding = () => (
  <Wrapper>
    <Info>01978336582</Info>
    <Info>uddoktagiridigital@gmail.com</Info>
    <List>
      {links.map((link) => (
        <Item key={link.name}>
          <A href={link.link} title={link.name} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </A>
        </Item>
      ))}
    </List>
  </Wrapper>
);

export default Branding;
