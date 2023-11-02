import Head from "next/head";
import { NextSeo } from "next-seo";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, data }) => {
  const { menus, categories, seo, favicon, page } = data;
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={favicon?.sourceUrl} />
      </Head>
      <NextSeo
        title={page?.seo.title}
        description={page?.seo.metaDesc}
        canonical={page?.seo.canonical}
        openGraph={{
          url: page?.seo.opengraphUrl,
          title: page?.seo.opengraphTitle,
          description: page?.seo.opengraphDescription,
          images: [
            {
              url: page?.seo.opengraphImage.sourceUrl,
              width: page?.seo.opengraphImage.mediaDetails.width,
              height: page?.seo.opengraphImage.mediaDetails.height,
              alt: page?.seo.opengraphImage.altText,
              type: page?.seo.opengraphImage.mediaType,
            },
          ],
          siteName: page?.seo.title,
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Header menus={menus} categories={categories} defaultSeo={seo} />
      <main className="bg-white">
        <div className="relative isolate">{children}</div>
      </main>
      <Footer menus={menus} mode="dark" />
    </>
  );
};

export default Layout;
