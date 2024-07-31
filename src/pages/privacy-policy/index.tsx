// Next
import { GetStaticPropsContext } from 'next';

// Modules
import { PrivacyPolicyScreen } from 'modules/screens/privacyPolicy';

// Components
import { Layout } from 'components/layout';

const Privacy = () => {
  return (
    <Layout>
      <PrivacyPolicyScreen />
    </Layout>
  );
};

export default Privacy;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
