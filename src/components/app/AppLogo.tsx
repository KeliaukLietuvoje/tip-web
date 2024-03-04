import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../other/Icons';

const AppLogo = () => {
  const navigate = useNavigate();
  return (
    <LogoContainer onClick={() => navigate('/')}>
      <Logo name="logo" />
    </LogoContainer>
  );
};

export default AppLogo;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
`;

const Logo = styled(Icon)`
  width: 100px;
`;
