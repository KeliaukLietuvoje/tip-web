import { device } from '@aplinkosministerija/design-system';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Icon, { IconName } from '../other/Icons';

const AppLogo = ({ isWhite = false }) => {
  const navigate = useNavigate();

  return (
    <LogoContainer onClick={() => navigate('/')}>
      <Logo isWhite={isWhite} name={IconName.logo} />
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

const Logo = styled(Icon)<{ isWhite: boolean }>`
  fill: ${({ isWhite }) => (isWhite ? 'white' : 'black')};
  width: 140px;
  @media ${device.mobileL} {
    width: 100px;
  }
`;
