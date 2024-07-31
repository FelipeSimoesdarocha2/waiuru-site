// Next
import { GetStaticPropsContext } from 'next';

// Modules
import { HomeScreen } from 'modules/screens/home';

// Components
import { Layout } from 'components/layout';

const Home = () => {
  return (
    <Layout selectedKey="1">
      <HomeScreen />
    </Layout>
  );
};

export default Home;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../i18n/locales/${locale}.json`)).default,
    },
  };
}
