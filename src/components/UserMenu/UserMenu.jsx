import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import {
  Text,
  TextContainer,
  UkrainianButton,
  UserContainer,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserContainer>
      <Text>
        Welcome,<TextContainer> {user.name}</TextContainer>
      </Text>
      <UkrainianButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UkrainianButton>
    </UserContainer>
  );
};
