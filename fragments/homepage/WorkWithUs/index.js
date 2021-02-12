import styled from '@emotion/styled';
import { FormattedMessage } from 'react-intl';

import { H2 } from '../../../components/Typography';

import WorkWithUsForm from './WorkWithUsForm';

const Wrapper = styled.div`
  padding: 3rem 1rem;
  text-align: center;

  @media (min-width: 768px) {
    padding-left: 2.25rem;
    padding-right: 2.25rem;
  }
`;

const Heading = styled(H2)`
  margin-bottom: 3rem;
`;

const WorkWithUs = () => {
  return (
    <Wrapper>
      <Heading>
        <FormattedMessage id="WorkWithUs.Heading" />
      </Heading>
      <WorkWithUsForm />
    </Wrapper>
  );
};

export default WorkWithUs;
