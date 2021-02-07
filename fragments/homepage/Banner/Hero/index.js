import styled from '@emotion/styled';

const Hero = styled.div`
  position: relative;
  padding-top: 4.75rem;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 120%;
    background: linear-gradient(180deg, #ffe9e2, #d2fffc);
    clip-path: polygon(0 0, 100% 0, 100% 75%, 0 90%);
  }

  @media (min-width: 768px) {
    &:after {
      background: linear-gradient(90deg, #d2fffc, #ffe9e2);
    }
  }
`;

export default Hero;
