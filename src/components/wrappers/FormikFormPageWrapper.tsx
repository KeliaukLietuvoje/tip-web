import { Button } from '@aplinkosministerija/design-system';
import { Form, Formik, yupToFormErrors } from 'formik';
import { isEmpty } from 'lodash';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../styles';
import { ButtonColors } from '../../utils/constants';
import { buttonsTitles, validationTexts } from '../../utils/texts';
import { DeleteInfoProps } from '../../utils/types';
import { DeleteComponent } from '../other/DeleteComponent';
import Icon, { IconName } from '../other/Icons';

interface FormPageWrapperProps {
  renderForm: (
    vales: any,
    errors: any,
    handleChange: (field: string, value: any, shouldValidate?: boolean | undefined) => void,
    setValues?: (values: any, shouldValidate?: boolean | undefined) => void,
  ) => JSX.Element;
  initialValues: any;
  onSubmit: (values: any, setErrors?: any) => void;
  title?: string;
  validationSchema: any;
  additionalValidation?: any;
  back?: boolean;
  backUrl?: string;
  disabled?: boolean;
  deleteInfo?: DeleteInfoProps;
  twoColumn?: boolean;
  submitButtonText?: string;
}

const FormPageWrapper = ({
  renderForm,
  title,
  initialValues,
  onSubmit,
  validationSchema,
  back = true,
  additionalValidation,
  backUrl,
  disabled,
  deleteInfo,
  twoColumn = false,
  submitButtonText = buttonsTitles.submit,
}: FormPageWrapperProps) => {
  const navigate = useNavigate();
  const [validateOnChange, setValidateOnChange] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: any, helper?: any) => {
    setLoading(true);
    try {
      await onSubmit(values, helper);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  const validate = async (values) => {
    setValidateOnChange(true);
    const additionalErrors = additionalValidation ? additionalValidation(values) : null;

    try {
      await validationSchema.validate(values, { abortEarly: false });
    } catch (e) {
      return {
        ...yupToFormErrors(e),
        ...additionalErrors,
      };
    }

    return additionalErrors;
  };

  const url: string | number = backUrl || -1;

  return (
    <Container>
      <Formik
        enableReinitialize={false}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validateOnChange={validateOnChange}
        validationSchema={validationSchema}
        validate={validate}
      >
        {({ values, errors, setFieldValue, handleSubmit, setValues }) => {
          return (
            <StyledForm two_column={twoColumn ? 1 : 0}>
              <Row>
                <InnerRow>
                  {back && (
                    <StyledBackButton
                      type="button"
                      onClick={() => navigate(url as string)}
                      left={<StyledBackIcon name={IconName.back} />}
                      variant={ButtonColors.TRANSPARENT}
                    >
                      {buttonsTitles.back}
                    </StyledBackButton>
                  )}
                  <Title>{title}</Title>
                </InnerRow>
                <DeleteComponent deleteInfo={deleteInfo} />
              </Row>
              {renderForm(values, errors, setFieldValue, setValues)}

              {!isEmpty(errors) && <ErrorMessage>{validationTexts.formFillError}</ErrorMessage>}
              {!disabled && (
                <ButtonContainer>
                  <Button
                    onClick={handleSubmit as any}
                    type="button"
                    loading={loading}
                    disabled={disabled}
                  >
                    {submitButtonText}
                  </Button>
                </ButtonContainer>
              )}
            </StyledForm>
          );
        }}
      </Formik>
    </Container>
  );
};

const Container = styled.div`
  flex-basis: 1200px;
  margin-bottom: 120px;
  display: flex;
  justify-content: center;
`;

const StyledBackButton = styled(Button)`
  width: fit-content;
  padding: 0;
  color: ${({ theme }) => theme.colors.primary};
  gap: 4px;
`;

const ButtonContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
`;

const Title = styled.div`
  color: #1d2430;
  font-size: 2.4rem;
`;

const StyledForm = styled(Form)<{ two_column: number }>`
  display: flex;
  flex-direction: column;
  flex-basis: ${({ two_column }) => (two_column ? '1200px' : '800px')};
`;

const StyledBackIcon = styled(Icon)`
  cursor: pointer;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.primary};
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

const InnerRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ErrorMessage = styled.div`
  background-color: #ffedf0;
  color: #fe1d42;
  border: 1px solid #fe1d42;
  border-radius: 4px;
  padding: 5px 15px 5px 15px;
  margin: 8px 0 10px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 2;
  @media ${device.mobileL} {
    width: 100%;
  }
`;

export default FormPageWrapper;
