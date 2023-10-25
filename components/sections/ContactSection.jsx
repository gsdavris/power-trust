import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2";
import Contact from "../forms/Contact";
import SocialMenu from "../menus/SocialMenu";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: HiOutlinePhone,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: HiOutlineEnvelope,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: HiOutlineMapPin,
  },
];

export default function ContactSection() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="pb-16 flex flex-col text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Deploy faster
          </h2>
          <p className="mt-2 font-bold text-3xl text-gray-900 tracking-tight sm:text-5xl">
            A better workflow
          </p>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <Contact />
          <div className="lg:max-w-lg">
            <p className="text-lg leading-8 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
            <dl className="mt-20 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon
                      className="absolute left-1 top-1 h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
            <div className="py-16 text-center">
              <SocialMenu
                social={[
                  {
                    name: "twitter",
                    location: "https://twitter.com/",
                  },
                  {
                    name: "facebook",
                    location: "https://www.facebook.com",
                  },
                  {
                    name: "instagram",
                    location: "https://www.instagram.com",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
