import styled from '@emotion/styled';

const Button = styled.button`
  display: inline-block;
  width: 100%;
  padding: 1rem;
  background-color: #32b260;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  font-weight: 500;
  box-shadow: 0 10px 22px rgb(172 246 199 / 90%);
  border: none;

  &:hover {
    background-color: #46b96f;
  }

  &:active {
    background-color: #2da056;
  }

  &:disabled {
    background-color: #aaaaaa;
    box-shadow: 0 10px 22px rgb(170 170 170 / 90%);
  }
`;

export default Button;
