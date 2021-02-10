import styled from '@emotion/styled';

import Content from './Content';
import Image from './Image';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 71.25rem;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Banner = () => (
  <Wrapper>
    <Content />
    <Image />
  </Wrapper>
);

export default Banner;
