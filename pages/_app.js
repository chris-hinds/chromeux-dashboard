import Head from "next/head";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import "./styles.css";

// components
import Layout from "../components/Layout";

import "../node_modules/primereact/resources/themes/nova/theme.css";
import "../node_modules/primereact/resources/primereact.min.css";
import "../node_modules/primeflex/primeflex.css";
import "../node_modules/primeicons/primeicons.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <CSSReset />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
