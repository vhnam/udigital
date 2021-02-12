import styled from '@emotion/styled';
import { FormattedMessage } from 'react-intl';

import { H2 } from '@/components/Typography';

const Wrapper = styled.div`
  @media (min-width: 992px) {
    flex: 0 0 auto;
    width: 50%;
  }
`;

const Heading = styled(H2)`
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #5b5b5b;
  line-height: 1.5rem;s
  white-space: pre-line;
`;

const Content = () => (
  <Wrapper>
    <Heading>
      <FormattedMessage id="AboutUs.Heading" />
    </Heading>
    <Description>
      <FormattedMessage id="AboutUs.Description" />
    </Description>
  </Wrapper>
);

export default Content;
