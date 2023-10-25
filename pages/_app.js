import "../styles/global.scss";
import { DefaultSeo } from "next-seo";
import { ModalProvider } from "../context";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client";

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ModalProvider>
        <DefaultSeo
          defaultTitle="Motify Template"
          description="A tailwind template for business sites"
          openGraph={{
            type: "website",
            locale: "en_IE",
            url: "https://www.url.ie/",
            siteName: "SiteName",
          }}
          twitter={{
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
          }}
        />

        <Component {...pageProps} />
      </ModalProvider>
    </ApolloProvider>
  );
}
