import styled from '@emotion/styled';

const Label = styled.label`
  position: absolute;
  top: ${(props) => (props.focus ? '-.75rem' : '0.75rem')};
  left: 2.25rem;
  font-size: 1rem;
  color: #545454;
  transform: scale(${(props) => (props.focus ? 0.75 : 1)});
  transform-origin: 0 0;
  transition: all 300ms ease-out;
`;

export default Label;
