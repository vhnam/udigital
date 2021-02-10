import styled from '@emotion/styled';

const List = styled.ul`
  padding: 0;
  margin-top: 3rem;
  list-style-type: none;

  @media (min-width: 768x) {
    margin-top: 5rem;
  }

  @media (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export default List;
