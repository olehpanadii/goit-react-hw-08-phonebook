import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(5)};
  max-width: 300px;
  border: 1px solid transparent;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 30px;
  margin: 20px 0;
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
