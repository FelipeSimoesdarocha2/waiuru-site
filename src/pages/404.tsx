// Next
import { GetStaticPropsContext } from 'next';

// Modules
import { NotFoundScreen } from 'modules/screens/notFound';

// Components
import { Layout } from 'components/layout';

const NotFound = () => {
    return (
        <Layout>
            <NotFoundScreen />
        </Layout>
    );
};

export default NotFound;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`../i18n/locales/${locale}.json`)).default,
        },
    };
}
