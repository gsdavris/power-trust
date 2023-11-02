import Banner from "../contentUI/Banner";
import InfoText from "../contentUI/InfoText";

const HeroBannerSection = () => {
  return (
    <Banner
      imageUrl="/sunset.jpg"
      minHeight="screen"
      alt="sunset"
      overlayOpacity="50"
    >
      <InfoText
        mode="dark"
        title="Data to enrich your online business"
        subtitle="Announcing our next round of funding."
        description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
        cta1={{ label1: "Read more", path1: "/#" }}
        cta2={{ label2: "Get started", path2: "/#" }}
        cta3={{ label3: "Learn more", path3: "/#" }}
      />
    </Banner>
  );
};

export default HeroBannerSection;
