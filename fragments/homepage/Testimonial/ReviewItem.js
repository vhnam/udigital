import styled from '@emotion/styled';

import { fetchImage } from '@/helpers/requests';

import { H6 } from '@/components/Typography';

import Avatar from '@/fragments/homepage/Testimonial/Avatar';

const Wrapper = styled.div`
  position: relative;
  padding: 1rem;
  margin: 0 auto;
  max-width: 45rem;
  min-height: 15rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 15px 40px rgb(0 0 0/ 20%);

  @media (min-width: 768px) {
    padding: 2.25rem;
  }

  @media (min-width: 992px) {
    padding: 4rem;
  }
`;

const ExtendH3 = H6.withComponent('h3');

const Name = styled(ExtendH3)`
  margin-top: 3rem;
  margin-bottom: 0;
  font-size: 1.25rem;
  text-align: center;

  @media (min-width: 992px) {
    margin-top: 0;
  }
`;

const Title = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  font-weight: 300;
  color: #616161;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const Review = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5rem;
  text-align: center;
`;

const ReviewItem = ({ item }) => (
  <Wrapper>
    <Avatar src={fetchImage(item.Avatar.url)} alt={item.Author.author_en} />
    <Name>{item.Author.author_en}</Name>
    <Title>{item.Title.title_en}</Title>
    <Review>{item.Description.description_en}</Review>
  </Wrapper>
);

export default ReviewItem;
