import styled from '@emotion/styled';

const Content = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: ${(props) => ('success' === props.status || 'error' === props.status ? '#fff' : '#000')};
`;

export default Content;
