import Slider from "../sliders/Slider";
import Banner from "../contentUI/Banner";
import InfoText from "../contentUI/InfoText";

const HeroSliderSection = ({ data }) => {
  return (
    <Slider
      className="bg-white"
      slidesPerView={1}
      // spaceBetween={20}
      centered-slides="true"
      navigation={{ enabled: false }}
      pagination={{ type: "bullets", dynamicBullets: true, clickable: true }}
      effect="slide"
      grabCursor="true"
      loop={false}
      scrollbar={{ draggable: true }}
      speed={500}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      breakpoints={{
        640: {
          navigation: { enabled: true },
        },
      }}
      injectStyles={[
        `
        :host {
            --swiper-theme-color: white;
            --swiper-pagination-bullet-inactive-color: #fff;
            --swiper-pagination-bullet-inactive-opacity: 0.2;
            --swiper-pagination-bullet-size: 12px;
            --swiper-pagination-bottom: 32px;
            --swiper-scrollbar-bg-color: rgba(255, 255, 255, 0.1);
            --swiper-scrollbar-drag-bg-color: rgba(255, 255, 255, 0.5);
            --swiper-scrollbar-size: 4px;
        }`,
      ]}
      on={{
        slideChange: () => console.log("slide changed"),
        progress: (s, progress) => console.log(`progress is ${progress}`),
      }}
    >
      {data.slide1 && (
        <Banner
          imageUrl={data.slide1.image.sourceUrl}
          minHeight="screen"
          alt={data.slide1.image.altText}
          overlayOpacity={data.slide1.opacity}
        >
          <InfoText
            mode="dark"
            contactModalButton="true"
            title={data.slide1.title}
            subtitle={data.slide1.subtitle}
            description={data.slide1.description}
            cta1={{
              label1: data.slide1.cta.label,
              path1:
                data.slide1.cta.urlType === "internal"
                  ? data.slide1.cta.path.uri
                  : data.slide1.cta.url,
            }}
            cta2={{
              label1: data.slide1.cta1.label,
              path1:
                data.slide1.cta1.urlType === "internal"
                  ? data.slide1.cta1.path.uri
                  : data.slide1.cta1.url,
            }}
            cta3={{
              label1: data.slide1.cta2.label,
              path1:
                data.slide1.cta2.urlType === "internal"
                  ? data.slide1.cta2.path.uri
                  : data.slide1.cta2.url,
            }}
          />
        </Banner>
      )}
      {data.slide2 && (
        <Banner
          imageUrl={data.slide2.image.sourceUrl}
          minHeight="screen"
          alt={data.slide2.image.altText}
          overlayOpacity={data.slide2.opacity}
        >
          <InfoText
            mode="dark"
            contactModalButton="true"
            title={data.slide2.title}
            subtitle={data.slide2.subtitle}
            description={data.slide2.description}
            cta1={{
              label1: data.slide2.cta.label,
              path1:
                data.slide2.cta.urlType === "internal"
                  ? data.slide2.cta.path.uri
                  : data.slide2.cta.url,
            }}
            cta2={{
              label1: data.slide2.cta1.label,
              path1:
                data.slide2.cta1.urlType === "internal"
                  ? data.slide2.cta1.path.uri
                  : data.slide2.cta1.url,
            }}
            cta3={{
              label1: data.slide2.cta2.label,
              path1:
                data.slide2.cta2.urlType === "internal"
                  ? data.slide2.cta2.path.uri
                  : data.slide2.cta2.url,
            }}
          />
        </Banner>
      )}
      {data.slide3 && (
        <Banner
          imageUrl={data.slide3.image.sourceUrl}
          minHeight="screen"
          alt={data.slide3.image.altText}
          overlayOpacity={data.slide3.opacity}
        >
          <InfoText
            mode="dark"
            contactModalButton="true"
            title={data.slide3.title}
            subtitle={data.slide3.subtitle}
            description={data.slide3.description}
            cta1={{
              label1: data.slide3.cta.label,
              path1:
                data.slide3.cta.urlType === "internal"
                  ? data.slide3.cta.path?.uri
                  : data.slide3.cta.url,
            }}
            cta2={{
              label1: data.slide3.cta1.label,
              path1:
                data.slide3.cta1.urlType === "internal"
                  ? data.slide3.cta1.path?.uri
                  : data.slide3.cta1.url,
            }}
            cta3={{
              label1: data.slide3.cta2.label,
              path1:
                data.slide3.cta2.urlType === "internal"
                  ? data.slide3.cta2.path?.uri
                  : data.slide3.cta2.url,
            }}
          />
        </Banner>
      )}
      {data.slide4 && (
        <Banner
          imageUrl={data.slide4.image.sourceUrl}
          minHeight="screen"
          alt={data.slide4.image.altText}
          overlayOpacity={data.slide4.opacity}
        >
          <InfoText
            mode="dark"
            contactModalButton="true"
            title={data.slide4.title}
            subtitle={data.slide4.subtitle}
            description={data.slide4.description}
            cta1={{
              label1: data.slide4.cta.label,
              path1:
                data.slide4.cta.urlType === "internal"
                  ? data.slide4.cta.path?.uri
                  : data.slide4.cta.url,
            }}
            cta2={{
              label1: data.slide4.cta1.label,
              path1:
                data.slide4.cta1.urlType === "internal"
                  ? data.slide4.cta1.path?.uri
                  : data.slide4.cta1.url,
            }}
            cta3={{
              label1: data.slide4.cta2.label,
              path1:
                data.slide4.cta2.urlType === "internal"
                  ? data.slide4.cta2.path?.uri
                  : data.slide4.cta2.url,
            }}
          />
        </Banner>
      )}
    </Slider>
  );
};

export default HeroSliderSection;
