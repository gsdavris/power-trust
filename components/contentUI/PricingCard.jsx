import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import ContactButton from "./ContactButton";

const PricingCard = ({ pricingData, mode }) => {
  return (
    <div
      className={`mx-auto mt-16 max-w-[320px] rounded-3xl ring-1 ring-gray-200 ${
        mode === "light" ? "bg-gray-50" : "bg-gray-900"
      } sm:mt-20 lg:mx-0 lg:flex lg:max-w-4xl`}
    >
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3
          className={`text-2xl font-bold tracking-tight ${
            mode === "light" ? "text-primary" : "text-gray-100"
          }`}
        >
          {pricingData.title}
        </h3>
        <div
          className={`mt-6 text-base leading-7 ${
            mode === "light" ? "text-gray-600" : "text-gray-300"
          }`}
          dangerouslySetInnerHTML={{ __html: pricingData.excerpt }}
        />
        <div className="mt-10 flex items-center gap-x-4">
          <h4
            className={`flex-none text-sm font-semibold leading-6 ${
              mode === "light" ? "text-indigo-600" : "text-indigo-300"
            }`}
          >
            Τι κερδίζετε
          </h4>
          <div className="h-px flex-auto bg-gray-100" />
        </div>
        <ul
          role="list"
          className={`mt-8 grid grid-cols-1 gap-4 text-sm leading-6 ${
            mode === "light" ? "text-gray-600" : "text-gray-300"
          } sm:grid-cols-2 sm:gap-6`}
        >
          {pricingData.features.nodes.length <= 4
            ? pricingData.features.nodes.map((feature) => (
                <li key={feature.id} className="flex gap-x-3">
                  <FaCheck
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </li>
              ))
            : pricingData.features.nodes.slice(0, 4).map((feature) => (
                <li key={feature.id} className="flex gap-x-3">
                  <FaCheck
                    className={`h-6 w-5 flex-none ${
                      mode === "light" ? "text-indigo-600" : "text-indigo-300"
                    }`}
                    aria-hidden="true"
                  />
                  {feature.name}
                </li>
              ))}
        </ul>
        {pricingData.features.nodes.length > 4 && (
          <h4
            className={`flex-none text-sm pt-4 font-semibold leading-6 ${
              mode === "light" ? "text-indigo-600" : "text-indigo-300"
            }`}
          >
            και πολλά ακόμα...
          </h4>
        )}
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-100 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:h-full lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-base font-semibold mb-4 text-gray-600">
              Κερδίστε τώρα με τα προϊόντα της Elpedison!
            </p>
            <ContactButton full label="Ζητήστε προσφορά" />
            <Link
              href={pricingData.uri}
              className="mt-4 block w-full rounded-md bg-indigo-600 px-3 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Μάθε περισσότερα
            </Link>
            <p className="mt-6 text-xs leading-5 text-gray-600">
              Δείτε{" "}
              <a
                href={pricingData.planDetails.charges}
                target="_blank"
                className="cursor-pointer text-indigo-500 hover:text-indigo-700 font-semibold"
              >
                εδώ
              </a>{" "}
              τις ανακοινωμένες τιμές των προϊόντων
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
