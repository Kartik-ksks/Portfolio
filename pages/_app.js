import { ThemeProvider } from 'next-themes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'
import '../styles/app.css'
import '../styles/sidenav.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="theme">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )

}

export default MyApp
