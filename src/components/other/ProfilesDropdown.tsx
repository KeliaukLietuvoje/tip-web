import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../../state/hooks';
import { handleNavigate } from '../../utils/functions';
import { useFilteredRoutes, useGetCurrentProfile, useLogoutMutation } from '../../utils/hooks';
import { handleSelectProfile } from '../../utils/loginFunctions';
import { buttonsTitles, inputLabels } from '../../utils/texts';
import Icon from './Icons';

const ProfilesDropdown = () => {
  const user = useAppSelector((state) => state.user?.userData);
  const currentProfile = useGetCurrentProfile();
  const [showSelect, setShowSelect] = useState(false);
  const routes = useFilteredRoutes();
  const location = useLocation();
  const navigate = useNavigate();
  const { mutateAsync } = useLogoutMutation();

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setShowSelect(false);
    }
  };

  return (
    <Container tabIndex={1} onBlur={handleBlur}>
      <Select onClick={() => setShowSelect(!showSelect)}>
        <SelectContainer>
          <Name>{currentProfile?.name || '-'}</Name>
          <Email>{currentProfile?.email || user?.email}</Email>
        </SelectContainer>
        <DropdownIcon name="miniArrowDown" />
      </Select>
      {showSelect && (
        <ProfilesContainer>
          <Profiles>{inputLabels.profiles}</Profiles>

          {user?.profiles?.map((profile, index) => {
            const selected = profile.id === currentProfile?.id;

            return (
              <ProfileContainer
                key={`profile-${index}`}
                onClick={() => {
                  handleSelectProfile(profile.id);
                }}
                selected={selected}
              >
                <div>
                  <Name>{profile?.name || '-'}</Name>
                  <Email>{profile?.email || user?.email}</Email>
                </div>
                {selected && <SelectedIcon name="active" />}
              </ProfileContainer>
            );
          })}
          <Hr />
          {(routes || [])
            .filter((route) => route.dropDown)
            .map((route, index) => (
              <Tab
                key={`routes-${index}`}
                onClick={() => handleNavigate(route.slug, navigate, setShowSelect)}
                selected={location.pathname.includes(route.slug)}
              >
                <TabIconContainer>
                  <TabIcon name={route?.iconName} />
                </TabIconContainer>
                <Name>{route?.label || '-'}</Name>
              </Tab>
            ))}
          <Hr />
          <BottomRow onClick={() => mutateAsync()}>
            <StyledLogoutIcon name="exit" />
            <Name>{buttonsTitles.logout}</Name>
          </BottomRow>
        </ProfilesContainer>
      )}
    </Container>
  );
};

const StyledLogoutIcon = styled(Icon)`
  color: #121926;
  font-size: 2rem;
`;

const TabIconContainer = styled.div`
  margin: 0px 11px 0px 5px;
`;

const TabIcon = styled(Icon)`
  color: #9aa4b2;
  font-size: 1.7rem;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 9px;
`;

const Hr = styled.div`
  border-bottom: 1px solid #121a553d;
  opacity: 1;
  margin: 16px -16px;
`;

const Container = styled.div`
  position: relative;
  min-width: 200px;
  &:focus {
    outline: none;
  }
`;

const DropdownIcon = styled(Icon)`
  cursor: pointer;
  font-size: 1.2rem;
`;

const SelectedIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.primary};
`;

const Select = styled.div`
  cursor: pointer;
  min-width: 100%;
  height: 31px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SelectContainer = styled.div`
  width: 100%;
`;

const Name = styled.div`
  font-size: 1.4rem;
  color: #121926;
  line-height: 17px;
`;

const Email = styled.div`
  font-size: 1.2rem;
  color: #4b5565;
`;

const Profiles = styled.div`
  font-size: 1.2rem;
  color: #4b5565;
  margin-bottom: 16px;
`;

const ProfilesContainer = styled.div`
  z-index: 3;
  position: absolute;
  right: 0;
  padding: 12px 16px;
  top: 40px;
  background-color: white;
  box-shadow: 0px 4px 15px #12192614;
  border: 1px solid #cdd5df;
  border-radius: 4px;
  width: 262px;
`;

const ProfileContainer = styled.div<{ selected: boolean }>`
  padding: 9px 12px;
  border-radius: 2px;
  border: 1px solid ${({ theme, selected }) => (selected ? theme.colors.primary : 'none')};
  display: flex;
  justify-content: space-between;
  :hover {
    background-color: #f8fafc;
    cursor: pointer;
  }
`;

const Tab = styled.div<{ selected: boolean }>`
  padding: 9px 0px;
  border-radius: 2px;
  display: flex;
  background-color: ${({ selected }) => (selected ? ' #f8fafc' : 'inherit')};
  :hover {
    background-color: #f8fafc;
    cursor: pointer;
  }
`;

export default ProfilesDropdown;
