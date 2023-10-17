import Slider from "../sliders/Slider";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export default function SliderList({ mode = "light" }) {
  return (
    <div className={mode !== "light" ? "bg-gray-100" : "bg-gray-800"}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-20 lg:max-w-none lg:py-32">
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight ${
              mode !== "light" ? "text-gray-900" : "text-gray-100"
            }`}
          >
            Collections
          </h2>
          <Slider
            className={
              (mode !== "light" ? "bg-gray-100" : "bg-gray-800") +
              " mt-8 sm:mt-16"
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
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                navigation: { enabled: true },
                slidesPerView: 4,
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
            {categories.map((category) => (
              <CategoryCard
                mode="light"
                key={category.name}
                category={category}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
