// Next
import { useRouter } from 'next/router';

import { NewsVizualizeScreen } from 'modules/screens/newsVizualize';

// Components
import { Layout } from 'components/layout';

// Providers
import { useNews } from '../../../modules/screens/home/sections/news/useNews';

const NewsVizualize = () => {
  const { query } = useRouter();
  const { list } = useNews();
  const news = list.filter(n => n.slug === query?.id);

  return (
    <Layout selectedKey="4">
      <NewsVizualizeScreen news={news[0]} />
    </Layout>
  );
};

export default NewsVizualize;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps(props: any) {
  return {
    props: {
      messages: (await import(`../../../i18n/locales/${props.locale}.json`)).default,
    },
  };
}
