import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../../state/hooks';
import { handleNavigate } from '../../utils/functions';
import { useGetCurrentProfile, useLogoutMutation } from '../../utils/hooks';
import { handleSelectProfile } from '../../utils/loginFunctions';
import { slugs } from '../../utils/slugs';
import { buttonsTitles, inputLabels, menuLabels } from '../../utils/texts';
import Icon, { IconName } from './Icons';

interface MobileProfilesDropdownProps {
  hideMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileProfilesDropdown = ({ hideMenu }: MobileProfilesDropdownProps) => {
  const user = useAppSelector((state) => state.user?.userData);
  const currentProfile = useGetCurrentProfile();
  const navigate = useNavigate();
  const [showSelect, setShowSelect] = useState(false);
  const { mutateAsync } = useLogoutMutation();

  return (
    <Container>
      <Select onClick={() => setShowSelect(!showSelect)}>
        <SelectContainer>
          <ProfileName>{currentProfile?.name || `${user.firstName} ${user.lastName}`}</ProfileName>
          <ProfileEmail>{currentProfile?.email || user?.email}</ProfileEmail>
        </SelectContainer>
        <DropdownIcon name={IconName.showMore} />
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
                  <Name>{profile?.name || `${user.firstName} ${user.lastName}`}</Name>
                  <Email>{profile?.email || user?.email}</Email>
                </div>
                {selected && <SelectedIcon name={IconName.active} />}
              </ProfileContainer>
            );
          })}
          <Hr />
          <Tab
            selected={false}
            onClick={() => {
              handleNavigate(slugs.profile, navigate, (show) => {
                setShowSelect(show);
                hideMenu(show);
              });
            }}
          >
            <TabIconContainer>
              <TabIcon name={IconName.person} />
            </TabIconContainer>
            <Name>{menuLabels.profileInfo}</Name>
          </Tab>
          <Hr />

          <Tab selected={false} onClick={() => mutateAsync()}>
            <TabIconContainer>
              <TabIcon name={IconName.exit} />
            </TabIconContainer>
            <Name>{buttonsTitles.logout}</Name>
          </Tab>
        </ProfilesContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Select = styled.div`
  height: 31px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: -8px;
`;

const Name = styled.div`
  font-size: 1.4rem;
  color: #121926;
  line-height: 17px;
`;

const ProfileName = styled.div`
  font-size: 1.4rem;
  color: #f7f8fa;
`;

const ProfileEmail = styled.div`
  font-size: 1.2rem;
  color: #bab2b0;
`;

const Email = styled.div`
  font-size: 1.2rem;
  color: #4b5565;
`;

const SelectContainer = styled.div`
  width: 100%;
  color: #121926;
`;

const DropdownIcon = styled(Icon)`
  cursor: pointer;
  color: #f7f8fa;
  font-size: 2.5rem;
`;

const Profiles = styled.div`
  font-size: 1.2rem;
  color: #4b5565;
  margin-bottom: 16px;
`;

const ProfilesContainer = styled.div`
  z-index: 3;
  position: absolute;
  bottom: 40px;
  padding: 5px 5px 5px 5px;
  padding: 12px 16px 12px 16px;
  background-color: white;
  box-shadow: 0px 4px 15px #12192614;
  border: 1px solid #cdd5df;
  border-radius: 16px;
  width: 100%;
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

const SelectedIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.2rem;
`;

const Hr = styled.div`
  margin: 10px -16px;
  border-bottom: 1px solid #121a553d;
  opacity: 1;
`;

const Tab = styled.div<{ selected: boolean }>`
  padding: 8px 12px;
  border-radius: 14px;
  display: flex;
  background-color: ${({ selected }) => (selected ? '#E9ECEF' : 'inherit')};
  :hover {
    background-color: #e9ecef;
    cursor: pointer;
  }
`;

const TabIconContainer = styled.div`
  margin: 0px 8px 0px 0;
  display: flex;
  align-items: center;
`;

const TabIcon = styled(Icon)`
  color: #9aa4b2;
  font-size: 2rem;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 5px 0 0 0;
`;

const StyledLogoutIcon = styled(Icon)`
  color: #121926;
  font-size: 2rem;
`;

export default MobileProfilesDropdown;
