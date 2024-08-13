import { Button, SimpleContainer, TextField } from '@aplinkosministerija/design-system';
import { useMutation, useQuery } from 'react-query';
import styled from 'styled-components';
import api from '../api';
import Icon from '../components/other/Icons';
import LoaderComponent from '../components/other/LoaderComponent';
import { Column } from '../styles/CommonStyles';
import {
  buttonsTitles,
  descriptions,
  formLabels,
  handleAlert,
  inputLabels,
  pageTitles,
} from '../utils';

export interface UserProps {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

const GenerateApiKey = () => {
  const generateKey = useMutation(() => api.generateApiKey(), {
    onError: () => {
      handleAlert();
    },
    retry: false,
  });

  const { data: tenant, isLoading } = useQuery(['tenant'], () => api.getTenant(), {
    onError: () => {
      handleAlert();
    },
  });

  const apiKey = generateKey?.data?.apiKey;

  if (isLoading) return <LoaderComponent />;

  return (
    <Container>
      <Row>
        <Title>{pageTitles.apiKey}</Title>
      </Row>
      <SimpleContainer title={formLabels.apiKey}>
        <Column>
          <NoteText>{descriptions.apiKey}</NoteText>
          <TextField
            value={apiKey || tenant?.apiKey}
            label={inputLabels.apiKey}
            rightIcon={
              apiKey ? (
                <IconContainer onClick={() => navigator.clipboard.writeText(apiKey)}>
                  <div>
                    <StyledIcon name="copy" />
                  </div>
                  {inputLabels.copy}
                </IconContainer>
              ) : undefined
            }
          />
        </Column>
      </SimpleContainer>
      <ButtonContainer>
        <Button loading={generateKey.isLoading} onClick={() => generateKey.mutateAsync()}>
          {buttonsTitles.generate}
        </Button>
      </ButtonContainer>
    </Container>
  );
};

const Title = styled.div`
  color: #1d2430;
  font-size: 2.4rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 22px 0px;
  flex-wrap: wrap;
  gap: 16px;
  width: '100%';
`;

const NoteText = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Container = styled.div`
  flex-basis: 800px;
  display: flex;
  flex-direction: column;
`;

const StyledIcon = styled(Icon)`
  font-size: 1.9rem;
`;

const IconContainer = styled.div`
  cursor: copy;
  border-left: 1px solid black;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.primary};
`;

const ButtonContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
`;

export default GenerateApiKey;
