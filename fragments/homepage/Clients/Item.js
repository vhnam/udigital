import styled from '@emotion/styled';
import Image from 'next/image';

const Li = styled.li`
  flex: 0 0 auto;
  width: 50%;
  padding: 0.5rem;

  @media (min-width: 768px) {
    width: 33.333333333%;
  }

  @media (min-width: 992px) {
    width: inherit;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 0 auto;
  width: 8rem;
  height: 8rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 3px 20px 43px rgb(0 0 0 / 20%);
`;

const Img = styled(Image)`
  object-fit: contain;
`

const Item = ({ brand, img }) => (
  <Li>
    <Container>
      <Img src={img} alt={brand} width="128" height="128" />
    </Container>
  </Li>
);

export default Item;
