import styled from '@emotion/styled';

import { useReviews } from '@/queries/hooks/reviews';

import Loading from '@/components/Loading';
import Slider from '@/components/Slider';

import Illustrator from '@/fragments/homepage/Testimonial/Illustrator';
import ReviewItem from '@/fragments/homepage/Testimonial/ReviewItem';

const Container = styled.div`
  background-color: #f9fffa;
`;

const Wrapper = styled.div`
  padding: 1rem 0;
`;

const Testimonial = () => {
  const { data, isFetching, isLoading } = useReviews();

  return (
    <Container>
      <Wrapper>
        <Illustrator />
        {(isFetching || isLoading) && <Loading />}
        {!isFetching && <Slider content={data} render={(item) => <ReviewItem key={item.id} item={item} />} />}
      </Wrapper>
    </Container>
  );
};

export default Testimonial;
