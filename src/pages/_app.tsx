import { ChallengeProvider } from "../contexts/ChallengeContext";
import GlobalStyles from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChallengeProvider>
        <Component {...pageProps} />
      </ChallengeProvider>
      <GlobalStyles />
    </>
  );
}

export default MyApp;
