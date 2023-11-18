import {
  InputLabel,
  RegisterContainer,
  StyledInput,
  UkrainianButton,
} from 'components/RegisterForm/RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegisterContainer onSubmit={handleSubmit} autoComplete="off">
      <InputLabel>
        Email
        <StyledInput type="email" name="email" />
      </InputLabel>
      <InputLabel>
        Password
        <StyledInput type="password" name="password" />
      </InputLabel>
      <UkrainianButton type="submit">Log In</UkrainianButton>
    </RegisterContainer>
  );
};
