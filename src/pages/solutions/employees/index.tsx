// Next
import { GetStaticPropsContext } from 'next';

// Modules
import { EmployeesScreen } from 'modules/screens/solutions/employees';

// Components
import { Layout } from 'components/layout';

const Employees = () => {
  return (
    <Layout selectedKey="2">
      <EmployeesScreen />
    </Layout>
  );
};

export default Employees;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../i18n/locales/${locale}.json`)).default,
    },
  };
}
