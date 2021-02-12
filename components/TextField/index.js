import { forwardRef } from 'react';
import styled from '@emotion/styled';

import useToggle from '../../hooks/useToggle';

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 2.25rem;
`;

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

const IconWrapper = styled.div`
  position: absolute;
  top: 0.875rem;
`;

const Input = styled.input`
  padding: 1rem 2rem;
  width: 100%;
  font-size: 1rem;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #545454;
  outline: none;
`;

const TextField = forwardRef(({ id, label, icon, onFocus, onBlur, ...others }, ref) => {
  const toggleFocus = useToggle();

  const handleFocusIn = (e) => {
    toggleFocus.setActive();

    e.persist();

    if (onFocus) {
      onFocus(e);
    }
  };

  const handleFocusOut = (e) => {
    if (!e.target.value) {
      toggleFocus.setInActive();
    }

    e.persist();

    if (onFocus) {
      onBlur(e);
    }
  };

  return (
    <Wrapper>
      <Label focus={toggleFocus.active} htmlFor={id}>
        {label}
      </Label>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <Input ref={ref} id={id} {...others} onFocus={handleFocusIn} onBlur={handleFocusOut} />
    </Wrapper>
  );
});

export default TextField;
