import Link from "next/link";
import { HiOutlineBars3 } from "react-icons/hi2";
import MainMenu from "../menus/MainMenu";
import ProfileDropdown from "../dropdowns/ProfileDropdown";
import ContactButton from "../contentUI/ContactButton";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({
  setOpen,
  mode,
  menus,
  categories,
  defaultSeo,
}) {
  return (
    <nav
      className={`max-w-7xl mx-auto flex ${
        mode === "dark" ? "text-gray-100" : "text-gray-700"
      } items-center justify-between p-6 lg:px-8`}
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <Link href="/" className="-m-1 p-1">
          <span className="sr-only">{defaultSeo.schema.companyName}</span>
          <img
            className="h-10 w-auto"
            src={defaultSeo.schema.companyLogo.sourceUrl}
            alt={defaultSeo.schema.companyLogo.altText}
          />
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <HiOutlineBars3 className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-4">
        <MainMenu mode={mode} menus={menus} planCategories={categories} />
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <ContactButton />
      </div>
    </nav>
  );
}
