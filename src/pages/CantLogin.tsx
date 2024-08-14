import styled from 'styled-components';
import ReturnToLogin from '../components/other/ReturnToLogin';
import { descriptions, formLabels } from '../utils';

export const CantLogin = () => {
  return (
    <>
      <Container>
        <H1>{formLabels.accessNotGranted}</H1>
        <Description>{descriptions.cantLogin} </Description>
      </Container>
      <ReturnToLogin />
    </>
  );
};

const Description = styled.div`
  font-size: 1.6rem;
  color: ${({ theme }) => theme?.colors?.text?.secondary};
  font-weight: 500;
  line-height: 26px;
`;

const H1 = styled.h1`
  font-size: 1.8rem;
  margin: 0;
  font-weight: 500;
  color: ${({ theme }) => theme?.colors?.text?.primary};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 32px 24px 32px;
  gap: 8px;
  border-radius: 8px;
  background: #f7f9fb;
  margin-top: 28px;
`;
