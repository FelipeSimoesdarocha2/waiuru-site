// Next
import { GetStaticPropsContext } from 'next';

// Modules
import { CookieScreen } from 'modules/screens/cookie';

// Components
import { Layout } from 'components/layout';

const Cookie = () => {
  return (
    <Layout>
      <CookieScreen />
    </Layout>
  );
};

export default Cookie;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
