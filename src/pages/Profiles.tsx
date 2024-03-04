import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import api from '../api';
import { Checkbox } from '../components';
import Button from '../components/buttons/Button';
import Icon from '../components/other/Icons';
import LoaderComponent from '../components/other/LoaderComponent';
import Modal from '../components/other/Modal';
import ProfileCard from '../components/other/ProfileCard';
import { useAppSelector } from '../state/hooks';
import { device } from '../styles';
import { useLogoutMutation } from '../utils/hooks';
import { handleSelectProfile } from '../utils/loginFunctions';
import { buttonsTitles, formLabels, inputLabels } from '../utils/texts';
const cookies = new Cookies();

const Profiles = () => {
  const user = useAppSelector((state) => state?.user?.userData);
  const [loading, setLoading] = useState(false);
  const { mutateAsync } = useLogoutMutation();
  const [agree, setAgree] = useState(false);
  const token = cookies.get('token');
  const queryClient = useQueryClient();

  const updateAgreeToTermsOfService = useMutation(api.agreeToTermsOfService, {
    onError: () => {},
    onSuccess: async () => {
      await queryClient.invalidateQueries([token]);
    },
  });

  const handleSelect = (profileId: string) => {
    setLoading(true);
    handleSelectProfile(profileId);
  };

  if (loading) return <LoaderComponent />;

  return (
    <>
      <Modal visible={!user.isAgreedToTermsOfService}>
        <InnerWrapper>
          <StyledIframe
            width={'100%'}
            height={'100%'}
            allowFullScreen={true}
            src="./termsOfService.pdf#toolbar=0&navpanes=0&scrollbar=0"
          />
          <Checkbox
            value={agree}
            label={inputLabels.agreeWithTermsOfService}
            onChange={(value) => setAgree(value)}
          />
          <ButtonContainer>
            <Button disabled={!agree} onClick={() => updateAgreeToTermsOfService.mutateAsync()}>
              {buttonsTitles.agree}
            </Button>
          </ButtonContainer>
        </InnerWrapper>
      </Modal>
      <Container>
        <Title>{formLabels.selectProfile}</Title>
        <InnerContainer>
          {user.profiles?.map((profile) => (
            <div key={profile?.id} onClick={() => handleSelect(profile.id)}>
              <ProfileCard name={profile.name} email={profile.email || user.email || '-'} />
            </div>
          ))}
          <Row onClick={() => mutateAsync()}>
            <Icon name="exit" />
            <BackButton> {buttonsTitles.logout}</BackButton>
          </Row>
        </InnerContainer>
      </Container>
    </>
  );
};

export default Profiles;

const Container = styled.div`
  width: 100%;
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
  gap: 16px;
  @media ${device.mobileL} {
    padding: 16px;
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const BackButton = styled.div`
  font-size: 1.4rem;
  color: #121926;
  margin-left: 11px;
`;

const Row = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  width: 100%;
`;

const Title = styled.div`
  font-size: 1.8rem;
  line-height: 22px;
  font-weight: bold;
  color: #121926;
  margin-bottom: 16px;
`;
