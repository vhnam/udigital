import styled from '@emotion/styled';
import { FormattedMessage } from 'react-intl';

import { useReviews } from '@/queries/hooks/reviews';

import Loading from '@/components/Loading';
import Slider from '@/components/Slider';
import { H2 } from '@/components/Typography';

import Illustrator from '@/fragments/homepage/Testimonial/Illustrator';
import ReviewItem from '@/fragments/homepage/Testimonial/ReviewItem';

const Container = styled.div`
  background-color: #f9fffa;
`;

const Wrapper = styled.div`
  padding: 1rem 0;
`;

const HiddenHeading = styled(H2)`
  display: none;
`;

const Testimonial = () => {
  const { data, isFetching, isLoading, isFetched, isSuccess } = useReviews();

  return (
    <Container>
      <HiddenHeading>
        <FormattedMessage id="Testimonial.Heading" />
      </HiddenHeading>
      <Wrapper>
        <Illustrator />
        {(isFetching || isLoading || !isSuccess) && <Loading />}
        {isFetched && isSuccess && (
          <Slider content={data} render={(item) => <ReviewItem key={item.id} item={item} />} />
        )}
      </Wrapper>
    </Container>
  );
};

export default Testimonial;
