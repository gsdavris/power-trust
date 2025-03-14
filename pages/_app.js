import { useEffect } from "react";
import { useRouter } from "next/router";
import AOS from "aos";
import "../styles/global.scss";
import "aos/dist/aos.css";
import { ModalProvider } from "../context";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client";

export default function MyApp({ Component, pageProps, router }) {
  const myRouter = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // Push to dataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "pageview",
        page: url,
      });
    };

    // When the component is mounted, subscribe to router changes
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
