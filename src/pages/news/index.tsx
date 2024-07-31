// Next
import { GetStaticPropsContext } from 'next';

// Modules
import { NewsScreen } from 'modules/screens/news';

// Components
import { Layout } from 'components/layout';

const News = () => {
  return (
    <Layout selectedKey="4">
      <NewsScreen />
    </Layout>
  );
};

export default News;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
