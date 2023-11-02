import Cards from "../contentUI/Cards";
import Card from "../contentUI/Card";

const CardsSection = () => {
  return (
    <Cards>
      <Card
        imageUrl="/business.jpg"
        imageHeight="h-64"
        alt="business"
        title="Awarded Agency"
        description="Divide details about your product or agency work into parts. A
          paragraph describing a feature will be enough."
        mode="light"
        iconName="award"
        iconColor="text-pink-400"
        iconBackground="bg-gray-100"
      />
      <Card
        path="/about"
        imageUrl="/people.jpg"
        imageHeight="h-64"
        alt="people"
        title="Free Revisions"
        description="Keep you user engaged by providing meaningful information.
          Remember that by this time, the user is curious."
        mode="light"
        iconName="retweet"
        iconColor="text-blue-400"
        iconBackground="bg-gray-100"
      />
      <Card
        imageUrl="/meeting.jpg"
        imageHeight="h-64"
        alt="meeting"
        title="Verified Company"
        description="Write a few lines about each one. A paragraph describing a
          feature will be enough. Keep you user engaged!"
        mode="light"
        iconName="fingerprint"
        iconColor="text-green-400"
        iconBackground="bg-gray-100"
      />
    </Cards>
  );
};

export default CardsSection;
