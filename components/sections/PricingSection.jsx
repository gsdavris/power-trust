import PricingCard from "../contentUI/PricingCard";
import Slider from "../sliders/Slider";

export default function PricingSection({ data }) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {data?.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {data?.description}
          </p>
        </div>
      </div>
      <Slider
        className={
          (data?.mode === "light" ? "white" : "bg-gray-800") +
          " mx-auto max-w-7xl px-6 lg:px-8"
        }
        slidesPerView="auto"
        spaceBetween="10"
        free-mode={true}
        centered-slides={true}
        navigation={{ enabled: false }}
        effect="slide"
        grabCursor={true}
        loop={false}
        speed={500}
        breakpoints={{
          640: {
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 30,
          },
          1024: {
            spaceBetween: 40,
          },
        }}
        injectStyles={[
          `
            ::slotted(swiper-slide) {
              width: auto;
              margin-left: 2px;
              padding-bottom: 20px;
            }
            :host {
                --swiper-theme-color: white;
            }`,
        ]}
      >
        {data?.plans.map((plan) => (
          <PricingCard key={plan.id} pricingData={plan} mode={data.mode} />
        ))}
      </Slider>
    </section>
  );
}
