// Next
import { GetStaticPropsContext } from 'next';

// Modules
import { RegisterScreen } from 'modules/screens/register';

// Components
import { Layout } from 'components/layout';

const Register = () => {
  return (
    <Layout>
      <RegisterScreen />
    </Layout>
  );
};

export default Register;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../i18n/locales/${locale}.json`)).default,
    },
  };
}
