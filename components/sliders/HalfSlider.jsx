import Link from "next/link";
import InfoText from "../contentUI/InfoText";
import Slider from "./Slider";

const HalfSlider = ({ children, mode = "light" }) => {
  return (
    <section
      className={`py-16 ${mode === "light" ? "bg-gray-100" : "bg-gray-900"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-wrap w-full items-center gap-8">
          <div className="w-full md:w-6/12">
            <Slider
              className={mode === "light" ? "bg-gray-100" : "bg-gray-900"}
              slideClasses=""
              slidesPerView={1}
              // spaceBetween={20}
              centered-slides="true"
              navigation={{ enabled: false }}
              pagination={{
                type: "bullets",
                dynamicBullets: true,
                clickable: true,
              }}
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
                progress: (s, progress) =>
                  console.log(`progress is ${progress}`),
              }}
            >
              {children}
            </Slider>
          </div>
          <div className="w-full md:w-4/12 mx-auto">
            <InfoText
              mode={mode}
              textAlign="left"
              title="Data to enrich your online business"
              subtitle="Announcing our next round of funding."
              description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
              cta1={{ label1: "Read more", path1: "/#" }}
              cta2={{ label2: "Get started", path2: "/#" }}
              cta3={{ label3: "Learn more", path3: "/#" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HalfSlider;
