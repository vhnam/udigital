import styled from '@emotion/styled';

const List = styled.ul`
  padding: 0;
  margin-top: 3rem;
  list-style-type: none;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5rem;
    margin-left: -1rem;
    margin-right: -1rem;
  }
`;

export default List;
