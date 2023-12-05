import ContactButton from "../contentUI/ContactButton";
import Modal from "../contentUI/Modal";
import FooterMenu from "../menus/FooterMenu";
import SocialMenu from "../menus/SocialMenu";
import ContactSection from "../sections/ContactSection";
import AbsoluteFooter from "./AbsoluteFooter";
import BackTop from "./BackTop";

const Footer = ({ mode = "light", menus, planCategories }) => {
  const secondaryMenu = menus?.nodes.find((menu) => menu.slug === "secondary");
  const mainMenu = menus?.nodes.find((menu) => menu.slug === "main");

  const categories = mainMenu?.menuItems.nodes
    .filter((category) => category.parentId === null)
    .map((category) => ({
      ...category,
      featured: planCategories.nodes.find(
        (planCategory) => planCategory.name === category.label,
      )?.categoryDetails.featured,
      sections: mainMenu.menuItems.nodes
        .filter((menuItem) => menuItem.parentId === category.id)
        .map((section) => ({
          ...section,
          items: mainMenu.menuItems.nodes.filter(
            (menuItem) => menuItem.parentId === section.id,
          ),
        })),
    }));

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
                Επίσημος Συνεργάτης
              </h4>
              <img
                className="h-12 w-auto mx-auto my-2 lg:ml-0"
                src="https://api.motify.gr/power-trust/wp-content/uploads/sites/2/2023/11/elpedison_logo.png"
                alt="Elpedison logo"
              />
              <h5
                className={`text-lg mt-0 mb-2  ${
                  mode === "light" ? "text-gray-600" : "text-gray-300"
                }`}
              >
                Kορυφαία εταιρεία ενέργειας, τόσο στην παραγωγή και προμήθεια
                ηλεκτρικού ρεύματος, όσο και στην προμήθεια φυσικού αερίου
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
                  {categories && categories[0] && (
                    <FooterMenu
                      mode={mode}
                      title={categories[0].label}
                      navigation={categories[0].sections}
                    />
                  )}
                </div>
                <div className="w-full md:w-4/12 px-4 ml-auto">
                  {categories && categories[1] && (
                    <FooterMenu
                      mode={mode}
                      title={categories[1].label}
                      navigation={categories[1].sections}
                    />
                  )}
                </div>
                <div className="w-full md:w-4/12 px-4 ml-auto">
                  <FooterMenu
                    mode={mode}
                    title="Σελίδες"
                    navigation={secondaryMenu?.menuItems?.nodes}
                  />
                  <div className="py-4">
                    <ContactButton />
                  </div>
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
