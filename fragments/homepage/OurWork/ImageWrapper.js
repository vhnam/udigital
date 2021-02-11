import styled from '@emotion/styled';
import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import OurWorkContext from '../../../contexts/OurWorkContext';

import useToggle from '../../../hooks/useToggle';

import Button from '../../../components/Button';
import { View } from '../../../components/Icons';

const Wrapper = styled.div`
  position: relative;
`;

const BlurContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background: linear-gradient(0deg, #000, transparent);
  opacity: ${(props) => (props.isShow ? 1 : 0)};
`;

const ButtonWrapper = styled.div`
  width: 40%;
`;

const CustomButton = styled(Button)`
  box-shadow: none;
`;

const Text = styled.span`
  margin-left: 0.5rem;
`;

const ImageWrapper = ({ id, children }) => {
  const ourWorkContext = useContext(OurWorkContext);

  const toggleMenu = useToggle();

  return (
    <Wrapper onMouseEnter={toggleMenu.setActive} onMouseLeave={toggleMenu.setInActive}>
      {children}
      <BlurContainer isShow={toggleMenu.active}>
        <ButtonWrapper>
          <CustomButton onClick={() => ourWorkContext.onSelectProject(id)}>
            <View />
            <FormattedMessage
              id="OurWork.SeePhoto"
              values={{
                text: (chunk) => <Text>{chunk}</Text>,
              }}
            />
          </CustomButton>
        </ButtonWrapper>
      </BlurContainer>
    </Wrapper>
  );
};

export default ImageWrapper;
