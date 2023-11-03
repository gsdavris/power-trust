import { FaCheck } from "react-icons/fa6";

const PricingCard = ({ pricingData }) => {
  return (
    <div className="bg-white transition-all flex-1 justify-between shadow hover:shadow-md rounded-3xl ring-1 ring-gray-200">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">
          {pricingData.title}
        </h3>
        <div
          className="mt-6 text-base leading-7 text-gray-600"
          dangerouslySetInnerHTML={{ __html: pricingData.description }}
        />
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
            Τι κερδίζετε
          </h4>
          <div className="h-px flex-auto bg-gray-100" />
        </div>
        <ul
          role="list"
          className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
        >
          {pricingData.includedFeatures.length <= 4
            ? pricingData.includedFeatures.map((feature) => (
                <li key={feature.id} className="flex gap-x-3">
                  <FaCheck
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </li>
              ))
            : pricingData.includedFeatures.slice(0, 4).map((feature) => (
                <li key={feature.id} className="flex gap-x-3">
                  <FaCheck
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </li>
              ))}
        </ul>
        {pricingData.includedFeatures.length > 4 && (
          <p className="text-sm font-semibold leading-6 text-indigo-600 my-4">
            και ακόμα περισσότερα...
          </p>
        )}
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-base font-semibold text-gray-600">
              {pricingData.priceTitle}
            </p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2 text-5xl font-bold tracking-tight text-gray-900">
              {pricingData.price}
            </p>
            <a
              href={pricingData.buttonUrl}
              className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {pricingData.buttonText}
            </a>
            <p className="mt-6 text-xs leading-5 text-gray-600">
              {pricingData.priceDetails}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
