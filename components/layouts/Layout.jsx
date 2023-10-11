import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="relative isolate">{children}</div>
      </main>
      <Footer mode="dark" />
    </>
  );
};

export default Layout;
