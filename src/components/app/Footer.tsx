import { useState } from 'react';
import styled from 'styled-components';
import { device } from '../../styles';
import { descriptions } from '../../utils/texts';
import Icon from '../other/Icons';
import Modal from '../other/Modal';

const Footer = () => {
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  return (
    <Container>
      <Modal onClose={() => setShowTermsOfService(false)} visible={showTermsOfService}>
        <InnerWrapper>
          <IconContainer onClick={() => setShowTermsOfService(false)}>
            <StyledIcon name="close" />
          </IconContainer>
          <StyledIframe width={'100%'} height={'100%'} allowFullScreen={true} />
        </InnerWrapper>
      </Modal>
      <InnerContainer>
        <Column>
          <FooterText>
            {descriptions.footerTitle}
            {`, ${new Date().getFullYear()}`}
          </FooterText>
          <FooterText>{descriptions.footerDescription}</FooterText>
        </Column>
        <FooterText onClick={() => setShowTermsOfService(true)}>
          Duomenų teikimo taisyklės
        </FooterText>
      </InnerContainer>
    </Container>
  );
};

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

const IconContainer = styled.div`
  margin: 0 0 0 auto;
  width: fit-content;
`;

const StyledIcon = styled(Icon)`
  cursor: pointer;
  font-size: 2rem;
`;

const StyledIframe = styled.iframe<{
  height: string;
  width: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const InnerWrapper = styled.div`
  background-color: white;
  border: 1px #dfdfdf solid;
  border-radius: 4px;
  margin: auto;
  width: 700px;
  height: 700px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  @media ${device.mobileL} {
    padding: 16px;
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: auto;
`;

const InnerContainer = styled.div`
  background-color: ${({ theme }) => theme?.colors?.primary};
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 32px;
  margin-top: auto;
  border-radius: 16px 16px 0 0;
  @media ${device.mobileL} {
    gap: 12px;
  }
`;

const FooterText = styled.div`
  font-size: 1.4rem;
  cursor: pointer;
  color: #eeebe5;
  max-width: 431px;
`;

export default Footer;
