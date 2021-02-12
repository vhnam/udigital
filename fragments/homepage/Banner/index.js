import styled from '@emotion/styled';

import Content from '@/fragments/homepage/Banner/Content';
import Image from '@/fragments/homepage/Banner/Image';

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
