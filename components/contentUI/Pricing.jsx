import Slider from "../sliders/Slider";

export default function Pricing({ title, description, children, mode }) {
  return (
    <div
      className={`${
        mode === "light" ? "bg-white" : "bg-gray-900"
      } py-24 sm:py-32`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2
            className={`text-3xl font-bold tracking-tight ${
              mode === "light" ? "text-gray-900" : "text-gray-100"
            } sm:text-4xl`}
          >
            {title}
          </h2>
          <p
            className={`mt-6 text-lg leading-8  ${
              mode === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            {description}
          </p>
        </div>
      </div>
      <Slider
        className={
          (mode === "light" ? "white" : "bg-gray-800") +
          "  pt-16 px-6 lg:px-8 mx-auto max-w-7xl mt-8 sm:mt-16"
        }
        slidesPerView={1}
        spaceBetween={20}
        centered-slides="true"
        navigation={{ enabled: false }}
        effect="slide"
        grabCursor="true"
        loop={false}
        speed={500}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            navigation: { enabled: true },
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            navigation: { enabled: true },
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            navigation: { enabled: true },
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        injectStyles={[
          `
        :host {
            --swiper-theme-color: white;
        }`,
        ]}
      >
        {children}
      </Slider>
    </div>
  );
}
