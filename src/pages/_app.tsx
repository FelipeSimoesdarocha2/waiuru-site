// Next
import { NextIntlClientProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NextNprogress from 'nextjs-progressbar';

// React-query
import { QueryClientProvider } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

// Styles
import GlobalStyle from '../styles/globals';
import { theme } from 'styles/theme';

// i18n
import '../i18n';

// Font
import '../../public/fonts/Quicksand.css';

// Utils
import { queryClient } from 'utils/querryClient';

// Components
import { Loading } from 'components/loading';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    setLoading(!router.isReady);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events, router.isReady]);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <NextIntlClientProvider locale={router.locale} timeZone="America/Chicago" messages={pageProps.messages}>
        {loading ? <Loading /> : <Component {...pageProps} />}
        <NextNprogress
          color={theme.primaryColor}
          startPosition={0}
          stopDelayMs={0}
          height={4}
          showOnShallow={false}
        />
      </NextIntlClientProvider>
    </QueryClientProvider>
  );
};

export default App;
