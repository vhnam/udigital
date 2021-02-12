import styled from '@emotion/styled';

import Slider from '@/components/Slider';

import Illustrator from '@/fragments/homepage/Testimonial/Illustrator';
import ReviewItem from '@/fragments/homepage/Testimonial/ReviewItem';

const Container = styled.div`
  background-color: #f9fffa;
`;

const Wrapper = styled.div`
  padding: 1rem 0;
`;

const reviews = [
  {
    avatar: '/img/avataaars-01.png',
    name: 'Elsa Porter',
    title: 'Director at Tahirpur Helpline',
    review:
      "If you are an Entrepreneur, then Uddoktagiri is your Entrepreneurial Partner! It's an amazing platform for entrepreneurs of Bangladesh. Great platform for Entrepreneurs of our country. Waiting to see their activities.",
  },
  {
    avatar: '/img/avataaars-02.png',
    name: 'John Smith',
    title: 'Former Software engineer at Incepta Pharmaceuticals Ltd',
    review:
      'To stand beside entrepreneurs, To stand beside future leaders. Hope it will help all kinds of startup and entrepreneur. Best wishes and go ahead',
  },
  {
    avatar: '/img/avataaars-03.png',
    name: 'Scarlett Light',
    title: 'Android Application Developer at Spinner Tech Ltd.',
    review:
      'It is a nice information sharing and consulting platform. Hope it will help all kinds of startup and entrepreneur. Best wishes',
  },
];

const Testimonial = () => {
  return (
    <Container>
      <Wrapper>
        <Illustrator />
        <Slider content={reviews} render={(item) => <ReviewItem item={item} />} />
      </Wrapper>
    </Container>
  );
};

export default Testimonial;
