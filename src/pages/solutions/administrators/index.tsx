// Next
import { GetStaticPropsContext } from 'next';

// Modules
import { AdministratorsScreen } from 'modules/screens/solutions/administrators';

// Components
import { Layout } from 'components/layout';

const Administrators = () => {
  return (
    <Layout selectedKey="2">
      <AdministratorsScreen />
    </Layout>
  );
};

export default Administrators;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../i18n/locales/${locale}.json`)).default,
    },
  };
}
