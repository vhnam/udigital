import styled from '@emotion/styled';

const Wrapper = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    flex: 0 0 auto;
    width: 55%;
    padding-top: 5rem;
  }
`;

const Img = styled.img`
  width: 80%;
`;

const Image = () => (
  <Wrapper>
    <Img src="/img/Banner.png" alt="Banner" />
  </Wrapper>
);

export default Image;
