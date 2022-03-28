import { GlobalStyle } from "../../styles/globals";
import { ThemeProvider } from "styled-components";
import { CustomButton } from "../../styles/Themes/customButtons";



function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={{ CustomButton }}>
        <GlobalStyle />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
