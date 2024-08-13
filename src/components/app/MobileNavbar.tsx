import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { handleNavigate } from '../../utils/functions';
import { useFilteredRoutes } from '../../utils/hooks';
import { externalRoutes } from '../../utils/slugs';
import Icon, { IconName } from '../other/Icons';
import MobileProfilesDropdown from '../other/MobileProfilesDropdown';
import AppLogo from './AppLogo';

const MobileHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const routes = useFilteredRoutes();

  return (
    <>
      {!showMenu ? (
        <Header>
          <AppLogo />
          <div onClick={() => setShowMenu(true)}>
            <BurgerIcon name={IconName.burger} />
          </div>
        </Header>
      ) : (
        <Container>
          <InfoContainer>
            <SecondRow>
              <AppLogo isWhite={true} />

              <Title onClick={() => handleNavigate('/', navigate, setShowMenu)}></Title>
              <div onClick={() => setShowMenu(false)}>
                <ExitIcon name={IconName.close} />
              </div>
            </SecondRow>
            {externalRoutes.map((route, index) => {
              return (
                <Tab
                  isActive={location.pathname.includes(route.slug)}
                  onClick={() => {
                    if (route.internal) {
                      navigate(route.slug);
                    } else {
                      window.open(route.slug, '_blank');
                    }

                    setShowMenu(false);
                  }}
                  key={`tab-${index}`}
                >
                  {route.label}
                </Tab>
              );
            })}
            {(routes || [])
              .filter((route) => route.dropDown)
              .map((route, index) => {
                return (
                  <Tab
                    isActive={location.pathname.includes(route.slug)}
                    onClick={() => handleNavigate(route.slug, navigate, setShowMenu)}
                    key={`tab-${index}`}
                  >
                    {route.label}
                  </Tab>
                );
              })}
          </InfoContainer>
          <MobileProfilesDropdown hideMenu={setShowMenu} />
        </Container>
      )}
    </>
  );
};

const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;
  height: 64px;
  width: 100%;
  padding: 18px 19px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #cdd5df;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #19181d;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 18px 24px;
  z-index: 5;
  overflow-y: auto;
`;

const InfoContainer = styled.div``;

const Tab = styled.div<{ isActive: boolean }>`
  padding: 10px 8px;
  margin: 0 -8px;
  color: #121926;
  border-radius: 4px;
  color: #f7f8fa;
  font-size: 16px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${({ isActive }) => isActive && '#EEEBE561'};
  &:hover {
    background-color: #eeebe561;
  }
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 30px;
  gap: 8px;
`;

const SecondRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 57px;
`;

const Title = styled.div`
  font-size: 2.3rem;
  font-weight: bold;

  color: white;
  margin-right: 11px;
`;

const BurgerIcon = styled(Icon)`
  cursor: pointer;
  font-size: 2rem;
  vertical-align: middle;
  color: #231f20;
`;

const ExitIcon = styled(Icon)`
  cursor: pointer;
  font-size: 2rem;
  vertical-align: middle;
  color: white;
`;

export default MobileHeader;
