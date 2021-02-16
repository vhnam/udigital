import styled from '@emotion/styled';
import Image from 'next/image';

const Wrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
`;

const Logo = () => (
  <Wrapper>
    <Image src="/img/logo.png" alt="UDigital" width="132" height="44" />
  </Wrapper>
);

export default Logo;
