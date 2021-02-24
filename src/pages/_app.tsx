import GlobalStyles from "../styles/global";

import { ChallengeProvider } from "../contexts/ChallengeContext";

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
