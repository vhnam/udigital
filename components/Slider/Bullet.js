import styled from '@emotion/styled';

const Bullet = styled.div`
  margin: 0 0.5rem;
  width: 1rem;
  height: 1rem;
  background-color: ${(props) => (props.active ? '#46B96F' : '#dedede')};
  border-radius: 50%;
`;

export default Bullet;
