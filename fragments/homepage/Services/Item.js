import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';

import { H5 } from '../../../components/Typography';
import Icon from './Icon';

const Li = styled.li`
  margin-bottom: 1.5rem;
  text-align: left;

  @media (min-width:992px) {
    flex: 0 0 auto;
    width: 50%;
  }
`;

const Container = styled.div`
  position: relative;
  padding: 1.5rem 1rem 1.5rem 7rem;
  border-radius: 0.5rem;
  background-color: ${(props) => rgba(props.color, 0.1)};
  transition: box-shadow 500ms ease-in;

  &:hover {
    cursor: pointer;
    box-shadow: 0 10px 40px rgb(0 0 0 / 20%);
  }

  @media (min-width: 768px) {
    padding-left: 4rem;
    padding-right: 2.25rem;
    margin-left: 2rem;
  }

  @media (min-width:992px) {
    margin-left: 4rem;
    height: 100%;
  }
`;

const Heading = styled(H5)`
  margin: 0;
`;

const Description = styled.p`
  margin-bottom: 0;

  font-size: 0.875rem;
  font-weight: 300;
  color: #5b5b5b;
  line-height: 1.25rem;
`;

const Item = ({ description, heading, color, icon }) => (
  <Li>
    <Container color={color}>
      <Icon color={color}>{icon}</Icon>
      <Heading>{heading}</Heading>
      <Description>{description}</Description>
    </Container>
  </Li>
);

export default Item;
