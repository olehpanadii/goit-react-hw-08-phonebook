import styled from 'styled-components';
import { Field, Form } from 'formik';

export const StyledForm = styled(Form)`
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
export const TransparentButton = styled.button`
  background: transparent;
  border: 1px solid transparent;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  color: ${p => p.theme.colors.black};
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};

  &:hover {
    background: ${p => p.theme.colors.transparent};
    color: #fff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(38, 162, 252, 0.5);
  }
`;
export const StyledInput = styled(Field)`
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
