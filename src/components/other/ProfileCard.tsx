import { useState } from 'react';
import styled from 'styled-components';
import Icon from './Icons';

interface ProfileCardProps {
  name: string;
  email: string;
}

const ProfileCard = ({ name, email }: ProfileCardProps) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <Container onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
      <Name>{name}</Name>
      <Email>{email}</Email>
      {onHover && <StyledIcon name="arrowRight" />}
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border: 1px solid #cdd5df8f;
  border-radius: 4px;
  width: 100%;
  padding: 12px 17px;
  position: relative;
  :hover {
    background-color: #0862ab1a;
    box-shadow: 0px 4px 8px ${({ theme }) => `${theme.colors.primary}33`};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;

const Name = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: #121926;
`;

const Email = styled.div`
  font-size: 1.4rem;
  color: #4b5565;
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
  top: 20px;
  right: 16px;
`;

export default ProfileCard;
