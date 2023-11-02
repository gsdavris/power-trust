import Pricing from "../contentUI/Pricing";
import PricingCard from "../contentUI/PricingCard";

const PricingSection = ({ data }) => {
  console.log(data);
  return (
    <section>
      <Pricing
        mode={data?.mode}
        title={data?.title}
        description={data.description}
      >
        {data?.plans &&
          data?.plans.length !== 0 &&
          data?.plans.map((plan) => (
            <PricingCard
              key={plan.id}
              pricingData={{
                title: plan.title,
                description: plan.excerpt,
                includedFeatures: plan?.features?.nodes,
                priceTitle: "Lifetime membership",
                price: "$349",
                priceDetails:
                  "Invoices and receipts available for easy company reimbursement",
                buttonText: "Get access",
                buttonUrl: "#",
              }}
            />
          ))}
      </Pricing>
    </section>
  );
};

export default PricingSection;
