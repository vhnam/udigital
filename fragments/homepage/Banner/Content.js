import styled from '@emotion/styled';
import { FormattedMessage } from 'react-intl';

import Button from '../../../components/Button';
import { H2 } from '../../../components/Typography';

const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 1.75rem;
  text-align: center;

  @media (min-width: 768px) {
    flex: 0 0 auto;
    padding-left: 2.25rem;
    width: 45%;
    text-align: left;
  }
`;

const Description = styled.p`
  margin: 0 auto 3rem;
  width: 80%;
  font-family: Montserrat, sans-serif;
  font-size: 1rem;
  color: #5b5b5b;
  line-height: 1.5rem;

  @media (min-width: 768px) {
    margin: 0 0 3rem;
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  width: 15rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const Content = () => (
  <Wrapper>
    <H2>
      <FormattedMessage
        id="Banner.Heading"
        values={{
          br: (chunk) => (
            <>
              {chunk}
              <br />
            </>
          ),
        }}
      />
    </H2>
    <Description>
      <FormattedMessage id="Banner.Description" />
    </Description>
    <ButtonWrapper>
      <Button>
        <FormattedMessage id="Banner.Button" />
      </Button>
    </ButtonWrapper>
  </Wrapper>
);

export default Content;
