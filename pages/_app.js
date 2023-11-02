import "../styles/global.scss";
import { ModalProvider } from "../context";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client";

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </ApolloProvider>
  );
}
