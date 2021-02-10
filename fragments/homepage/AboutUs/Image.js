import styled from '@emotion/styled';

const Wrapper = styled.div`
text-align: center;

@media (min-width: 992px) {
  flex: 0 0 auto;
  width: 50%;
}
`;

const Img = styled.img`
  width: 100%;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 992px) {
    width: 100%;
  }
`;

const Image = () => (
  <Wrapper>
    <Img src="/img/about-us.png" alt="About Us" />
  </Wrapper>
);

export default Image;
