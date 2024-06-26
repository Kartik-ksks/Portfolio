import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="theme">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )

}

export default MyApp
