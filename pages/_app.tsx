import { UserContextProvider } from '../src/context/UserContext';
import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </UserContextProvider>
  );
}

export default MyApp;
