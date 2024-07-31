// Next
import { GetStaticPropsContext } from 'next';

// Modules
import { AboutScreen } from 'modules/screens/about';

// Components
import { Layout } from 'components/layout';

const About = () => {
  return (
    <Layout selectedKey="3">
      <AboutScreen />
    </Layout>
  );
};

export default About;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
