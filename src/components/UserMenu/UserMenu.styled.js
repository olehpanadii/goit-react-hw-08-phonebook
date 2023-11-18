import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${p => p.theme.spacing(5)};
  justify-content: center;
  align-items: center;
  font-family: arimo;
`;

export const UkrainianButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background: linear-gradient(135deg, #4f94cd, #ffd700);
  border: none;
  color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: linear-gradient(135deg, #ffd700, #4f94cd);
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 153, 255, 0.5);
  }
`;
export const Text = styled.p`
  font-size: 20px;
`;
export const TextContainer = styled.span`
  font-weight: 600;
`;
