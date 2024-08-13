import Div100vh from 'react-div-100vh';
import styled from 'styled-components';
import LoginImage from '../../assets/loginImage.jpeg';
import { descriptions } from '../../utils/texts';
import { ChildrenType } from '../../utils/types';
import Icon, { IconName } from '../other/Icons';

export interface LoginLayoutProps {
  children?: ChildrenType;
}

const LoginLayout = ({ children }: LoginLayoutProps) => {
  return (
    <Div100vh>
      <Container>
        <ImageContainer>
          <LayoutImage src={LoginImage} />
        </ImageContainer>
        <Content>
          <LogoContainer>
            <Logo name={IconName.logo} />
          </LogoContainer>
          <Description>{descriptions.tip}</Description>
          {children}
        </Content>
      </Container>
    </Div100vh>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 700px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 80px;
  overflow-y: auto;
  background-color: white;
  border-radius: 0 0 40px 40px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0a196f;
`;

const Logo = styled(Icon)`
  width: 200px;
  margin-left: -10px;
`;

const LogoContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  height: 100%;
`;

const LayoutImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const Description = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme?.colors?.text?.secondary};
  margin: 12px 0;
`;

export default LoginLayout;
