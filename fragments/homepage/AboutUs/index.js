import styled from '@emotion/styled';

import Content from './Content';
import Image from './Image';

const Container = styled.div`
  background-color: #f8fbff;
`;

const Wrapper = styled.div`
  padding: 1rem;
  margin: 0 auto;
  max-width: 71.25rem;

  @media (min-width: 768px) {
    padding: 2.25rem;
  }

  @media (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

const AboutUs = () => (
  <Container id="about">
    <Wrapper>
      <Content />
      <Image />
    </Wrapper>
  </Container>
);

export default AboutUs;
