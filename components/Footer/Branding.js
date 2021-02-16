import styled from '@emotion/styled';
import { FormattedMessage } from 'react-intl';

import Logo from '@/components/Logo';

const Wrapper = styled.div`
  text-align: center;

  @media (min-width: 992px) {
    flex: 0 0 auto;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    width: 40%;
    text-align: left;
  }
`;

const Description = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  color: #545454;
`;

const Branding = () => (
  <Wrapper>
    <Logo />
    <Description>
      <FormattedMessage id="Footer.Description" />
    </Description>
  </Wrapper>
);

export default Branding;
