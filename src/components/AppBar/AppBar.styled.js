import styled from 'styled-components';
export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  border-bottom: 1px solid transparent;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: ${p => p.theme.spacing(20)};
`;
