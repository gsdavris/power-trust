import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children, menus, categories, defaultSeo }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/mark.svg" />
      </Head>
      <Header menus={menus} categories={categories} defaultSeo={defaultSeo} />
      <main className="bg-white">
        <div className="relative isolate">{children}</div>
      </main>
      <Footer menus={menus} mode="dark" />
    </>
  );
};

export default Layout;
