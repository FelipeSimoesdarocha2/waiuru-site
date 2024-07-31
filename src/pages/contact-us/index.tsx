// Next
import { GetStaticPropsContext } from 'next';

// Modules
import { ContactScreen } from 'modules/screens/contact';

// Components
import { Layout } from 'components/layout';

const Contact = () => {
  return (
    <Layout>
      <ContactScreen />
    </Layout>
  );
};

export default Contact;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
