import { createGlobalStyle, ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
  body {
   // display: flex;
    //flex-direction: column;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-image: url("towfiqu-barbhuiya-ho-p7qLBewk-unsplash.jpg")
  }

  h1 {
    color: white;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};
