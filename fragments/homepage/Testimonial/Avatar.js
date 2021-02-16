import styled from '@emotion/styled';
import Image from 'next/image';

const Wrapper = styled.div`
  position: absolute;
  top: -2.8125rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 5.625rem;
  height: 5.625rem;
  background-color: #D4D4D4;
  border-radius: 50%;
  border: 0.25rem solid #fff;
  box-shadow: 0 10px 30px rgb(0 0 0 / 20%);
  overflow: hidden;
`;

const Img = styled(Image)`
  width: 100%;
`;

const Avatar = ({ src, alt }) => (
  <Wrapper>
    <Img src={src} alt={alt} width="90" height="90" />
  </Wrapper>
);

export default Avatar;
