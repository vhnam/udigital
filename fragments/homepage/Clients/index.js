import styled from '@emotion/styled';

import Item from '@/fragments/homepage/Clients/Item';
import List from '@/fragments/homepage/Clients/List';

const Wrapper = styled.div`
  padding: 1rem;
  margin: 0 auto;
  max-width: 896px;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 992px) {
    width: inherit;
  }

  @media (min-width: 1200px) {
    margin-top: 5rem;
  }
`;

const data = [
  {
    brand: 'Crafftic Arts',
    img: '/img/crafftic-arts.png',
  },
  {
    brand: '24TKT',
    img: '/img/24tkt.png',
  },
  {
    brand: 'BSA',
    img: '/img/bsa.png',
  },
  {
    brand: 'DDF',
    img: '/img/ddf.png',
  },
  {
    brand: 'Disarga',
    img: '/img/disarga.png',
  },
  {
    brand: 'Beyond Beauty',
    img: '/img/beyond-beauty.png',
  },
];

const Clients = () => (
  <Wrapper>
    <List>
      {data.map((item) => (
        <Item key={item.brand} brand={item.brand} img={item.img} />
      ))}
    </List>
  </Wrapper>
);

export default Clients;
