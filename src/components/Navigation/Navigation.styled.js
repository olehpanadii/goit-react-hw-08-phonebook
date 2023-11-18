import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationLink = styled(NavLink)`
  color: ${p => p.theme.colors.black};
  font-weight: bold;
  font-size: 26px;
  &:hover {
    color: ${p => p.theme.colors.hover};
  }
  padding: 15px 0;
`;
export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  gap: ${p => p.theme.spacing(5)};
`;
