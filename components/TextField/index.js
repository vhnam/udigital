import { forwardRef } from 'react';
import styled from '@emotion/styled';

import useToggle from '@/hooks/useToggle';

import Label from '@/components/TextField/Label';
import Input from '@/components/TextField/Input';

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 2.25rem;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0.875rem;
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
