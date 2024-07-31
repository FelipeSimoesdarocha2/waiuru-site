// Next
import { GetStaticPropsContext } from 'next';

// Modules
import { ResidentsScreen } from 'modules/screens/solutions/residents';

// Components
import { Layout } from 'components/layout';

const Residents = () => {
  return (
    <Layout selectedKey="2">
      <ResidentsScreen />
    </Layout>
  );
};

export default Residents;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../i18n/locales/${locale}.json`)).default,
    },
  };
}
