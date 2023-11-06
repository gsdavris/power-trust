import "../styles/global.scss";
import { ModalProvider } from "../context";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client";

export default function MyApp({ Component, pageProps, router }) {
  return (
    <ApolloProvider client={client}>
      <ModalProvider>
        <Component {...pageProps} key={router.asPath} />
      </ModalProvider>
    </ApolloProvider>
  );
}
