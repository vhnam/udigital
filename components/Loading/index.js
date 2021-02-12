import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 4rem;
  height: 4rem;

  > div {
    position: absolute;
    background: #fff;
    opacity: 1;
    border-radius: 50%;
    animation: loading 1.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  @keyframes loading {
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  }
`;

const Inner = styled.div``;

const Outter = styled.div`
  animation-delay: -0.7s;
`;

const Loading = () => (
  <Wrapper>
    <Inner />
    <Outter />
  </Wrapper>
);

export default Loading;
