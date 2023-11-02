import HalfSlider from "../sliders/HalfSlider";
import Banner from "../contentUI/Banner";

const HalfSliderSection = () => {
  return (
    <HalfSlider>
      <Banner
        minHeight="600px"
        imageUrl="/sunset.jpg"
        alt="sunset"
        overlayOpacity="50"
      />
      <Banner
        minHeight="600px"
        imageUrl="/team.jpg"
        alt="team"
        overlayOpacity="50"
      />
      <Banner
        minHeight="600px"
        imageUrl="/business.jpg"
        alt="business"
        overlayOpacity="50"
      />
    </HalfSlider>
  );
};

export default HalfSliderSection;
