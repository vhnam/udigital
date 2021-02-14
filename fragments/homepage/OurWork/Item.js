import styled from '@emotion/styled';

import { H5 } from '@/components/Typography';

import ImageWrapper from '@/fragments/homepage/OurWork/ImageWrapper';

const Li = styled.li`
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    flex: 0 0 auto;
    width: 50%;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-bottom: 2.25rem;
  }

  @media (min-width: 992px) {
    width: 33.333333333%;
  }
`;

const Card = styled.div`
  box-shadow: 0 5px 30px rgb(0 0 0 / 20%);
  border-radius: 0.25rem;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Category = styled.div`
  margin-bottom: 0.5rem;
  font-weight: 300;
`;

const ExtendedH3 = H5.withComponent('h3');

const Project = styled(ExtendedH3)`
  margin: 0;
`;

const Item = ({ category, project, id, image }) => (
  <Li>
    <Card>
      <ImageWrapper id={id}>
        <Img src={image} alt={project} />
      </ImageWrapper>
      <Content>
        <Category>{category}</Category>
        <Project>{project}</Project>
      </Content>
    </Card>
  </Li>
);

export default Item;
