import { WelcomePage } from 'components/WelcomePage/WelcomePage';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <WelcomePage />
    </>
  );
}
