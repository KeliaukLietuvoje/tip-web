import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { externalRoutes } from '../../utils/slugs';
import ProfilesDropdown from '../other/ProfilesDropdown';
import AppLogo from './AppLogo';

const Menu = () => {
  const navigate = useNavigate();

  return (
    <Header>
      <InnerContainer>
        <AppLogo />
        <TabContainer>
          {externalRoutes.map((route, index) => (
            <Tab
              key={`menu-${index}`}
              onClick={() =>
                route.internal ? navigate(route.slug) : window.open(route.slug, '_blank')
              }
            >
              {route.label}
            </Tab>
          ))}
        </TabContainer>
        <ProfilesDropdown />
      </InnerContainer>
    </Header>
  );
};

export default Menu;

const Tab = styled.div`
  font-size: 1.6rem;
  color: #121926;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  margin: 0px 16px;
  flex-wrap: wrap;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const InnerContainer = styled.div`
  flex-basis: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 10px 20px 10px 20px;
  border-radius: 0 0 16px 16px;
`;
