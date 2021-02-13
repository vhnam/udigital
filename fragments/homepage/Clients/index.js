import styled from '@emotion/styled';

import { fetchImage } from '@/helpers/requests';

import { useClients } from '@/queries/hooks/clients';

import Loading from '@/components/Loading';

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

const Clients = () => {
  const { data, isLoading, isFetching, isFetched, isSuccess } = useClients();

  return (
    <Wrapper>
      {(isLoading || isFetching || !isSuccess) && <Loading />}
      <List>
        {isFetched &&
          isSuccess &&
          data.map((item) => <Item key={item.id} brand={item.Name} img={fetchImage(item.Logo[0].url)} />)}
      </List>
    </Wrapper>
  );
};

export default Clients;
