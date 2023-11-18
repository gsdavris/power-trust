import { useEffect } from "react";
import AOS from "aos";
import "../styles/global.scss";
import "aos/dist/aos.css";
import { ModalProvider } from "../context";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client";

export default function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <ApolloProvider client={client}>
      <ModalProvider>
        <Component {...pageProps} key={router.asPath} />
      </ModalProvider>
    </ApolloProvider>
  );
}
