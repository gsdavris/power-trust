import { Fragment } from "react";
import CardsSection from "../sections/CardsSection";
import ContactSection from "../sections/ContactSection";
import HalfSliderSection from "../sections/HalfSliderSection";
import Images2WText from "../sections/Images2WText";
import PricingSection from "../sections/PricingSection";
import SliderList from "../sections/SliderList";
import StatSection from "../sections/StatsSection";
import InfoTextSection from "../sections/InfoTextSection";
import ContentSection from "../sections/ContentSection";
import HeroSection from "../sections/HeroSection";

const PageContent = ({ content }) => {
  const sectionsMap = {
    infotext: InfoTextSection,
    stats: StatSection,
    pricing: PricingSection,
    cards: CardsSection,
    halfSlider: HalfSliderSection,
    imagesWText: Images2WText,
    sliderList: SliderList,
    contact: ContactSection,
    contentSection: ContentSection,
    heroSection: HeroSection,
  };

  const getSectionByName = (name, data) => {
    if (name in sectionsMap) {
      const SectionComponent = sectionsMap[name];
      return <SectionComponent data={...data} />;
    }
  };



  return (
    content?.pageSections?.map((section) => (
      <Fragment key={section}>
        {getSectionByName(section, content[section])}
      </Fragment>
    )) || null
  );
};

export default PageContent;
