import styled from '@emotion/styled';

import Content from './Content';
import Image from './Image';

const Wrapper = styled.div`
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
