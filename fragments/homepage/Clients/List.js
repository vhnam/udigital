import styled from '@emotion/styled';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style-type: none;

  @media (min-width: 992px) {
    flex-wrap: nowrap;
  }
`;

export default List;
