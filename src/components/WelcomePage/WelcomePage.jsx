import { Title, TitleContainer } from './WelcomePage.styled';

export const WelcomePage = () => {
  return (
    <TitleContainer>
      <Title>
        Always stay in touch with your important contacts{' '}
        <span role="img" aria-label="Greeting icon">
          🫱🏼‍🫲🏽
        </span>
      </Title>
    </TitleContainer>
  );
};
