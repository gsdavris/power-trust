import HalfSlider from "../sliders/HalfSlider";
import Banner from "../contentUI/Banner";

const HalfSliderSection = ({ data }) => {
  return (
    <HalfSlider
      title={data.title}
      subtitle={data.subtitle}
      description={data.description}
      mode={data.mode}
      cta={data.cta}
      cta1={data.cta1}
      cta2={data.cta2}
    >
      <Banner
        minHeight={data?.minheight}
        imageUrl={data?.image?.sourceUrl}
        alt={data?.image?.altText}
        overlayOpacity={data.opacity}
      />
      <Banner
        minHeight={data.minheight}
        imageUrl={data?.image1?.sourceUrl}
        alt={data.image1?.altText}
        overlayOpacity={data.opacity}
      />
      <Banner
        minHeight={data?.minheight}
        imageUrl={data?.image2?.sourceUrl}
        alt={data?.image2?.altText}
        overlayOpacity={data.opacity}
      />
    </HalfSlider>
  );
};

export default HalfSliderSection;
