import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../../state/hooks';
import { handleNavigate } from '../../utils/functions';
import { useFilteredRoutes, useGetCurrentProfile, useLogoutMutation } from '../../utils/hooks';
import { handleSelectProfile } from '../../utils/loginFunctions';
import { buttonsTitles, inputLabels } from '../../utils/texts';
import Icon, { IconName } from './Icons';

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
          <Name>{currentProfile?.name || `${user.firstName} ${user.lastName}`}</Name>
          <Email>{currentProfile?.email || user?.email}</Email>
        </SelectContainer>
        <div>
          <DropdownIcon name={IconName.dropdownArrow} />
        </div>
      </Select>
      {showSelect && (
        <DropDownContainer>
          <Profiles>{inputLabels.profiles}</Profiles>
          <ProfilesContainer>
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
                    <SelectName>{profile?.name || `${user.firstName} ${user.lastName}`}</SelectName>
                    <SelectEmail>{profile?.email || user?.email}</SelectEmail>
                  </div>
                  {selected && <SelectedIcon name={IconName.active} />}
                </ProfileContainer>
              );
            })}
          </ProfilesContainer>

          <Hr />
          <ProfilesContainer>
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
          </ProfilesContainer>

          <Hr />
          <Tab onClick={() => mutateAsync()} selected={false}>
            <TabIconContainer>
              <TabIcon name={IconName.exit} />
            </TabIconContainer>
            <Name>{buttonsTitles.logout}</Name>
          </Tab>
        </DropDownContainer>
      )}
    </Container>
  );
};

const TabIconContainer = styled.div`
  margin: 0px 11px 0px 5px;
`;

const TabIcon = styled(Icon)`
  color: #9aa4b2;
  font-size: 2.2rem;
`;

const Hr = styled.div`
  border-bottom: 1px solid #ced6e0;
  opacity: 1;
  margin: 16px 0;
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
  font-size: 2.2rem;
  color: ${({ theme }) => theme?.colors?.text?.secondary};
`;

const SelectedIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.2rem;
`;

const Select = styled.div`
  cursor: pointer;
  min-width: 100%;
  height: 31px;

  display: grid;
  grid-template-columns: 1fr 28px;
  gap: 12px;
  align-items: center;
`;

const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Name = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme?.colors?.text?.primary};
  line-height: 17px;
`;

const Email = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme?.colors?.text?.secondary};
`;

const SelectName = styled.div`
  font-size: 1.4rem;
  line-height: 18.2px;
`;

const SelectEmail = styled.div`
  font-size: 1.2rem;
  line-height: 15.6px;
`;

const Profiles = styled.div`
  color: ${({ theme }) => theme?.colors?.text?.secondary};
  margin-bottom: 2px;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 15.6px;
`;

const DropDownContainer = styled.div`
  z-index: 3;
  position: absolute;
  right: 0;
  padding: 12px 16px;
  top: 60px;
  background-color: white;
  box-shadow: 0px 4px 15px #12192614;
  border: 1px solid #cdd5df;
  border-radius: 16px;
  width: 267px;
`;

const ProfilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProfileContainer = styled.div<{ selected: boolean }>`
  padding: 9px 12px;
  border-radius: 16px;
  border: 1px solid ${({ theme, selected }) => (!selected ? theme.colors.border : 'none')};
  background-color: ${({ theme, selected }) =>
    selected ? `${theme.colors.secondary}` : 'transparent'};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme?.colors?.text?.secondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  :hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
  }
`;

const Tab = styled.div<{ selected: boolean }>`
  padding: 8px 12px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  background-color: ${({ selected }) => (selected ? '#E9ECEF' : 'inherit')};
  :hover {
    background-color: #e9ecef;
    cursor: pointer;
  }
`;

export default ProfilesDropdown;
