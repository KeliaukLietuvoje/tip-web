import { useMutation, useQuery } from 'react-query';
import styled from 'styled-components';
import api from '../api';
import { LoaderComponent, TextField } from '../components';
import Button from '../components/buttons/Button';
import SimpleContainer from '../components/containers/SimpleContainer';
import Icon from '../components/other/Icons';
import { Column } from '../styles/CommonStyles';
import { handleAlert } from '../utils/functions';
import { buttonsTitles, descriptions, formLabels, inputLabels } from '../utils/texts';

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

          <Row>
            <Button loading={generateKey.isLoading} onClick={() => generateKey.mutateAsync()}>
              {buttonsTitles.generate}
            </Button>
          </Row>
        </Column>
      </SimpleContainer>
    </Container>
  );
};

const NoteText = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
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

const Row = styled.div`
  display: flex;
`;

export default GenerateApiKey;
