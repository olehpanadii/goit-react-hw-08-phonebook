import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { Container, MainContainer } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <MainContainer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </MainContainer>
    </Container>
  );
};
