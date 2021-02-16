import styled from '@emotion/styled';
import Image from 'next/image';

const Wrapper = styled.div`
  position: relative;
  padding: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    flex: 0 0 auto;
    width: 55%;
    padding: 2.25rem;
  }
`;

const Thumbnail = () => (
  <Wrapper>
    <Image
      src="/img/Banner.png"
      alt="Banner"
      width="555"
      height="394"
    />
  </Wrapper>
);

export default Thumbnail;
