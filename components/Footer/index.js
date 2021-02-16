import styled from '@emotion/styled';

import Branding from '@/components/Footer/Branding';
import Contact from '@/components/Footer/Contact';
import Nav from '@/components/Footer/Nav';

const Container = styled.footer`
  padding: 2.25rem 1rem 5rem 1rem;
  margin: 0 auto;
  max-width: 71.25rem;
  background-color: #f8fdf9;

  @media (min-width: 768px) {
    padding-left: 2.25rem;
    padding-right: 2.25rem;
  }
`;

const Row = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    align-item: flex-start;
    margin-left: -1rem;
    margin-right: -1rem;
  }
`;

const Footer = () => (
  <Container>
    <Row>
      <Branding />
      <Nav />
      <Contact />
    </Row>
  </Container>
);

export default Footer;
