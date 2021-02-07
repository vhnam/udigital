import styled from '@emotion/styled';

const Button = styled.button`
  padding: 1rem;
  background-color: #32b260;
  font-size: 1.25rem;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  box-shadow: 0 10px 22px #06a10b;

  &:hover {
    background-color: #46b96f;
  }

  &:active {
    background-color: #2da056;
  }
`;

export default Button;
