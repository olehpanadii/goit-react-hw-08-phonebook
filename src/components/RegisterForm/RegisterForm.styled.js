import styled from 'styled-components';

export const RegisterContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(8)};
  align-items: center;
  justify-content: center;
`;

export const UkrainianButton = styled.button`
  padding: 15px 20px;
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
export const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  &:focus {
    outline: none;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: arimo;
  gap: ${p => p.theme.spacing(4)};
`;
