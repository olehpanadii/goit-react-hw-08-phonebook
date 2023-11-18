import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  InputLabel,
  RegisterContainer,
  StyledInput,
  UkrainianButton,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <RegisterContainer onSubmit={handleSubmit} autoComplete="off">
        <InputLabel>
          Username
          <StyledInput type="text" name="name" />
        </InputLabel>
        <InputLabel>
          Email
          <StyledInput type="email" name="email" />
        </InputLabel>
        <InputLabel>
          Password
          <StyledInput type="password" name="password" />
        </InputLabel>
        <UkrainianButton type="submit">Register</UkrainianButton>
      </RegisterContainer>
    </div>
  );
};
