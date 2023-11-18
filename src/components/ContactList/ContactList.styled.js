import styled from 'styled-components';

export const DeleteBtn = styled.button`
  background: transparent;
  border: 1px solid transparent;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  color: ${p => p.theme.colors.black};
  padding: 5px 10px;
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

export const ContactItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(6)};
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 10px 15px;
  border-radius: 5px;
`;
export const ContactNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.spacing(8)};
`;

export const ContainerList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: ${p => p.theme.spacing(8)};
  padding-bottom: 40px;
`;
