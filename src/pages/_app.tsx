import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { darkTheme } from '../styles/stitches.config';
import * as gtag from '../helpers/analytics.helpers';
import { Analytics } from '../components/analytics';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          content="Personal website of Bruno Mariano. Front-end developer with a passion for web development."
          name="description"
        />
        <meta
          name="application-name"
          content="Bruno Mariano - Front-end developer"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Bruno Mariano - Front-end developer"
        />
        <meta name="theme-color" content="#0F1413" />
        <meta name="msapplication-TileColor" content="#0F1413" />
        <meta
          name="msapplication-config"
          content="https://brunomariano.com/browserconfig.xml"
        />
        <meta
          property="og:site_name"
          content="Bruno Mariano - Front-end developer"
        />
        <meta
          property="og:title"
          content="Bruno Mariano - Front-end developer"
        />
        <meta
          property="og:description"
          content="Personal website of Bruno Mariano. Front-end developer with a passion for web development."
        />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://brunomariano.com" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/my-portfoiio/image/upload/v1654625685/my-portfolio/coverage_qfcpzk.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:image:alt"
          content="Bruno Mariano - Front-end developer"
        />
        <meta property="og:type" content="profile" />
        <meta content="Bruno" name="profile:first_name" />
        <meta content="Mariano" name="profile:last_name" />
        <meta content="male" name="profile:gender" />
        <meta content="brunomariano" name="profile:username" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@bsignx" name="twitter:site" />
        <meta content="@bsignx" name="twitter:creator" />
        <meta
          content="Bruno Mariano - Front-end developer"
          name="twitter:title"
        />
        <meta
          content="Personal website of Bruno Mariano. Front-end developer with a passion for web development."
          name="twitter:description"
        />
        <meta
          content="https://res.cloudinary.com/my-portfoiio/image/upload/v1654625685/my-portfolio/coverage_qfcpzk.jpg"
          name="twitter:image"
        />
        <title>Bruno Mariano - Front-end developer</title>
      </Head>

      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{
          light: 'light',
          dark: darkTheme.className,
        }}
      >
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
