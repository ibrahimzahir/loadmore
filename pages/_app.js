import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Biome</title>
        <link rel="icon" href="images/biome.jpg" />
      </Head>

      <Header />

      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
