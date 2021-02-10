import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 1rem;
  bottom: 0;
  display: flex;
  align-items: center;
  height: 100%;

  @media (min-width: 768px) {
    left: -2rem;
  }
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  box-shadow: 8px 24px 37px rgb(0 0 0 / 20%);

  > svg {
    transform: scale(0.75);
  }
`;

const Icon = ({ color, children }) => (
  <Wrapper>
    <Circle color={color}>{children}</Circle>
  </Wrapper>
);

export default Icon;
