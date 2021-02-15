import styled from '@emotion/styled';

import { useAbout } from '@/queries/hooks/about';

import Loading from '@/components/Loading';

import Content from '@/fragments/homepage/AboutUs/Content';
import Thumbnail from '@/fragments/homepage/AboutUs/Thumbnail';

const Container = styled.div`
  background-color: #f8fbff;
`;

const Wrapper = styled.div`
  padding: 1rem;
  margin: 0 auto;
  max-width: 71.25rem;

  @media (min-width: 768px) {
    padding: 2.25rem;
  }

  @media (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

const AboutUs = () => {
  const { data, isLoading, isFetching, isFetched, isSuccess } = useAbout();

  return (
    <Container id="about">
      <Wrapper>
        {(isLoading || isFetching || !isSuccess) && <Loading />}
        {isFetched && isSuccess && <Content>{data.biography_en}</Content>}
        <Thumbnail />
      </Wrapper>
    </Container>
  );
};

export default AboutUs;
