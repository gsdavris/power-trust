import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MainMenu = ({ mode, menus, planCategories }) => {
  const [isClient, setIsClient] = useState(false);

  const navigation = {
    pages: [
      { id: "features", name: "Features", href: "#" },
      { id: "marketplace", name: "Marketplace", href: "#" },
      { id: "company", name: "Company", href: "#" },
    ],
  };

  const mainMenu = menus?.nodes.find((menu) => menu.slug === "main");

  const categories = mainMenu?.menuItems.nodes
    .filter((category) => category.parentId === null)
    .map((category) => ({
      ...category,
      featured: planCategories.nodes.find(
        (planCategory) => planCategory.name === category.label,
      )?.categoryDetails.featured,
      sections: mainMenu.menuItems.nodes
        .filter((menuItem) => menuItem.parentId === category.id)
        .map((section) => ({
          ...section,
          items: mainMenu.menuItems.nodes.filter(
            (menuItem) => menuItem.parentId === section.id,
          ),
        })),
    }));

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
          <div className="flex h-full gap-x-4">
            {categories?.map((category) => (
              <Popover key={category.id} className="flex">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open
                          ? "border-indigo-600 text-indigo-600"
                          : mode === "dark"
                          ? "border-transparent text-gray-100 hover:text-indigo-200"
                          : "border-transparent text-gray-700 hover:text-indigo-700 hover:bg-gray-50",
                        "relative z-10 -mb-px flex items-center border-b-2 text-sm px-3 py-2 leading-6 font-semibold transition-colors duration-200 ease-out",
                      )}
                    >
                      {category.label}
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div
                          className="absolute inset-0 top-1/2 bg-white shadow"
                          aria-hidden="true"
                        />
                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category?.featured?.map((item) => (
                                  <div
                                    key={item.id}
                                    className="group relative text-base sm:text-sm"
                                  >
                                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                      <img
                                        src={item.featuredImage.node.sourceUrl}
                                        alt={item.featuredImage.node.altText}
                                        className="h-full object-cover object-center"
                                      />
                                    </div>
                                    <Link
                                      href={item.uri}
                                      className="mt-6 block font-medium text-gray-900 text-base"
                                    >
                                      <span
                                        className="absolute inset-0 z-10"
                                        aria-hidden="true"
                                      />
                                      {item.title}
                                    </Link>
                                    <p
                                      aria-hidden="true"
                                      className="mt-1 text-sm"
                                    >
                                      Μάθε περισσότερα
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-base">
                                {category.sections.map((section) => (
                                  <div key={section.id}>
                                    <Link
                                      href={section.uri}
                                      id={`${section.label}-heading`}
                                      className="font-semibold text-gray-900 hover:text-indigo-700"
                                    >
                                      {section.label}
                                    </Link>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.label}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.id} className="flex">
                                          <Link
                                            href={item.uri}
                                            className="hover:text-gray-800 text-sm"
                                          >
                                            {item.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            ))}
          </div>
        </Popover.Group>
      )}
      {navigation?.pages?.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className={`rounded-lg px-3 py-2 text-sm ${
            mode === "dark"
              ? " text-gray-100 hover:text-indigo-200"
              : " text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
          } font-semibold leading-6`}
        >
          {item.name}
        </a>
      ))}
    </>
  );
};

export default MainMenu;
