import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/mark.svg" />
      </Head>
      <Header />
      <main className="bg-white">
        <div className="relative isolate">{children}</div>
      </main>
      <Footer mode="dark" />
    </>
  );
};

export default Layout;
