import { Fragment } from "react";
import { Tab, Disclosure } from "@headlessui/react";
import { HiPlus, HiMinus } from "react-icons/hi2";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { id: "features", name: "Features", href: "#" },
    { id: "marketplace", name: "Marketplace", href: "#" },
    { id: "company", name: "Company", href: "#" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MobileMenu = () => {
  return (
    <>
      <Tab.Group as="div" className="mt-2">
        <div className="border-b border-gray-200">
          <Tab.List className="-mb-px flex space-x-8">
            {navigation.categories.map((category) => (
              <Tab
                key={category.name}
                className={({ selected }) =>
                  classNames(
                    selected
                      ? "border-indigo-600 text-indigo-600"
                      : "border-transparent text-gray-900",
                    "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium",
                  )
                }
              >
                {category.name}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels as={Fragment}>
          {navigation.categories.map((category) => (
            <Tab.Panel key={category.name} className="space-y-10 pb-8 pt-10">
              <div className="grid grid-cols-2 gap-x-4">
                {category.featured.map((item) => (
                  <div key={item.name} className="group relative text-sm">
                    <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                      <img
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        className="h-full object-cover object-center"
                      />
                    </div>
                    <a
                      href={item.href}
                      className="mt-6 block font-medium text-gray-900"
                    >
                      <span
                        className="absolute inset-0 z-10"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                    <p aria-hidden="true" className="mt-1">
                      Shop now
                    </p>
                  </div>
                ))}
              </div>
              {category.sections.map((section) => (
                <Disclosure
                  as="div"
                  key={section.id}
                  className="border-b border-gray-200 py-3"
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="block text-base font-semibold leading-7 text-gray-900">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <HiMinus className="h-5 w-5" aria-hidden="true" />
                            ) : (
                              <HiPlus className="h-5 w-5" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-4">
                        {section.items.map((item, index) => (
                          <div
                            key={index}
                            className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-600 hover:bg-gray-50"
                          >
                            {item.name}
                          </div>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      {navigation?.pages?.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          {item.name}
        </a>
      ))}
    </>
  );
};

export default MobileMenu;
