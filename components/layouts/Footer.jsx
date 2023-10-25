import ContactButton from "../contentUI/ContactButton";
import Modal from "../contentUI/Modal";
import FooterMenu from "../menus/FooterMenu";
import SocialMenu from "../menus/SocialMenu";
import ContactSection from "../sections/ContactSection";
import AbsoluteFooter from "./AbsoluteFooter";
import BackTop from "./BackTop";

const Footer = ({ mode = "light" }) => {
  return (
    <>
      <footer
        className={`relative ${
          mode === "light" ? "bg-gray-200" : "bg-gray-900"
        } pt-12 pb-6`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-4/12 px-8">
              <h4
                className={`text-3xl font-semibold ${
                  mode === "light" ? "text-black" : "text-gray-100"
                }`}
              >
                Let's keep in touch!
              </h4>
              <h5
                className={`text-lg mt-0 mb-2  ${
                  mode === "light" ? "text-gray-600" : "text-gray-300"
                }`}
              >
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <SocialMenu
                  social={[
                    { name: "twitter", location: "https://twitter.com/" },
                    { name: "facebook", location: "https://www.facebook.com" },
                    {
                      name: "instagram",
                      location: "https://www.instagram.com",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="w-full lg:w-8/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full md:w-4/12 px-4 ml-auto">
                  <FooterMenu
                    mode={mode}
                    title="Usefull links"
                    navigation={[
                      { label: "About Us", location: "" },
                      { label: "Blog", location: "" },
                      { label: "Github", location: "" },
                      { label: "Free Products", location: "" },
                    ]}
                  />
                </div>
                <div className="w-full md:w-4/12 px-4 ml-auto">
                  <FooterMenu
                    mode={mode}
                    title="Usefull links"
                    navigation={[
                      { label: "About Us", location: "" },
                      { label: "Blog", location: "" },
                      { label: "Github", location: "" },
                      { label: "Free Products", location: "" },
                    ]}
                  />
                </div>
                <div className="w-full md:w-4/12 px-4 ml-auto">
                  <FooterMenu
                    mode={mode}
                    title="Other Resources"
                    navigation={[
                      { label: "Terms & Conditions", location: "" },
                      { label: "Privacy Policy", location: "" },
                    ]}
                  />
                  <ContactButton />
                </div>
              </div>
            </div>
          </div>
          <AbsoluteFooter mode={mode} />
        </div>
        <BackTop />
        <Modal>
          <ContactSection />
        </Modal>
      </footer>
    </>
  );
};

export default Footer;
