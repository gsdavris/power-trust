import Card from "../contentUI/Card";

const CardsSection = ({ data }) => {
  return (
    <section
      className={`w-full  py-16 sm:py-20 ${
        data.mode === "light" ? "bg-gray-100" : "bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {data?.cardItems?.map((card) => (
            <Card
              path={card.uri}
              key={card.name}
              imageUrl={card.categoryDetails?.featuredImage?.sourceUrl}
              imageHeight={data.imageHeight}
              alt={card.categoryDetails?.featuredImage?.altText}
              title={card.name}
              description={card.description}
              mode={data.mode}
              parent={card?.parent?.node?.name}
              iconName={card.categoryDetails.iconName}
              iconColor={card.categoryDetails.iconColor}
              iconBackground="bg-gray-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
