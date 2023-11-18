import { useAuth } from 'hooks';
import { Container, NavigationLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && <NavigationLink to="/contacts">Tasks</NavigationLink>}
    </Container>
  );
};
