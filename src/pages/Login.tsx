import { Button, PasswordField, TextField } from '@aplinkosministerija/design-system';
import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import api from '../api';
import Icon, { IconName } from '../components/other/Icons';
import {
  buttonsTitles,
  handleAlert,
  handleUpdateTokens,
  inputLabels,
  loginSchema,
  useEGatesSign,
  useUserInfo,
  validationTexts,
} from '../utils';

interface LoginProps {
  email: string;
  password: string;
}

export const Login = () => {
  const env = import.meta.env;
  const isProdEnvironment = env?.VITE_SENTRY_ENV === 'production';

  const onSubmit = async ({ email, password }: { email: string; password: string }) => {
    const params = { email, password };
    await loginMutation.mutateAsync(params);
  };

  const loginMutation = useMutation((params: LoginProps) => api.login(params), {
    onError: ({ response }: any) => {
      const text = validationTexts[response?.data?.type];

      if (text) {
        return setErrors({ password: text });
      }

      handleAlert();
    },
    onSuccess: (data) => {
      handleUpdateTokens(data);
    },
    retry: false,
  });

  const { mutateAsync: eGatesMutation, isLoading: eGatesSignLoading } = useEGatesSign();

  const { isLoading: userInfoLoading } = useUserInfo();

  const loading = [loginMutation.isLoading, userInfoLoading].some((loading) => loading);

  const { values, errors, setFieldValue, handleSubmit, setErrors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnChange: false,
    validationSchema: loginSchema,
    onSubmit,
  });

  const handleType = (field: string, value: string) => {
    setFieldValue(field, value);
    setErrors({});
  };

  return (
    <FormContainer
      onSubmit={handleSubmit}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleSubmit();
        }
      }}
    >
      {!isProdEnvironment && (
        <>
          <InnerContainer>
            <TextField
              label={inputLabels.email}
              type="email"
              value={values.email}
              error={errors.email}
              onChange={(e) => handleType('email', e)}
            />
            <PasswordField
              label={inputLabels.password}
              value={values.password}
              error={errors.password}
              onChange={(e) => handleType('password', e)}
            />
            <ButtonContainer>
              <Button width="100%" loading={loading} disabled={loading} type="submit">
                {buttonsTitles.login}
              </Button>
            </ButtonContainer>
            <OrContainer>
              <Or>
                <Separator />
                <SeparatorLabelContainer>
                  <SeparatorLabel> {buttonsTitles.or}</SeparatorLabel>
                </SeparatorLabelContainer>
              </Or>
            </OrContainer>
          </InnerContainer>
        </>
      )}
      <StyledEGateButton
        type="button"
        isProdEnvironment={isProdEnvironment}
        width="100%"
        left={
          <IconContainer>
            <Icon name={IconName.eGate} />
          </IconContainer>
        }
        loading={eGatesSignLoading}
        disabled={eGatesSignLoading}
        onClick={() => eGatesMutation()}
      >
        {buttonsTitles.eGates}
      </StyledEGateButton>
    </FormContainer>
  );
};

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledEGateButton = styled(Button)<{ isProdEnvironment: boolean }>`
  margin-top: ${({ isProdEnvironment }) => (isProdEnvironment ? '70px' : '0px')};
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const OrContainer = styled.div`
  width: 100%;
`;

const Or = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SeparatorLabelContainer = styled.div`
  font: normal normal 600 16px/40px;
  letter-spacing: 1.02px;
  color: #0b1f518f;
  position: absolute;
  max-width: 400px;
  width: 100%;
  text-align: center;
  opacity: 1;
`;

const SeparatorLabel = styled.span`
  font: normal normal 600 16px/40px;
  letter-spacing: 1.02px;
  color: #0b1f518f;
  padding: 0 8px;
  margin: 0 auto;
  vertical-align: middle;
  opacity: 1;
`;

const Separator = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme?.colors?.border};
  margin: auto 0;
  position: absolute;
  max-width: 400px;
  width: 100%;
  margin: 24px 0;
`;
