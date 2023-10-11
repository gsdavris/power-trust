import InfoText from "../components/contentUI/InfoText";
import Layout from "../components/layouts/Layout";
import Banner from "../components/contentUI/Banner";
import Slider from "../components/sliders/Slider";
import Cards from "../components/contentUI/Cards";
import Card from "../components/contentUI/Card";
import HalfSlider from "../components/sliders/HalfSlider";
import Images2WText from "../components/contentUI/Images2WText";
import Stats from "../components/contentUI/Stats";
import Pricing from "../components/contentUI/Pricing";
import PricingCard from "../components/contentUI/PricingCard";

export default function IndexPage() {
  return (
    <Layout>
      <Slider
        className="bg-white"
        slidesPerView={1}
        // spaceBetween={20}
        centered-slides="true"
        navigation={{ enabled: false }}
        pagination={{ type: "bullets", dynamicBullets: true, clickable: true }}
        effect="slide"
        grabCursor="true"
        loop={false}
        scrollbar={{ draggable: true }}
        speed={500}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            navigation: { enabled: true },
          },
        }}
        injectStyles={[
          `
        :host {
            --swiper-theme-color: white;
            --swiper-pagination-bullet-inactive-color: #fff;
            --swiper-pagination-bullet-inactive-opacity: 0.2;
            --swiper-pagination-bullet-size: 12px;
            --swiper-pagination-bottom: 32px;
            --swiper-scrollbar-bg-color: rgba(255, 255, 255, 0.1);
            --swiper-scrollbar-drag-bg-color: rgba(255, 255, 255, 0.5);
            --swiper-scrollbar-size: 4px;
        }`,
        ]}
        on={{
          slideChange: () => console.log("slide changed"),
          progress: (s, progress) => console.log(`progress is ${progress}`),
        }}
      >
        <Banner
          imageUrl="/team.jpg"
          minHeight="screen"
          alt="team"
          overlayOpacity="50"
        >
          <InfoText
            mode="dark"
            title="Data to enrich your online business"
            subtitle="Announcing our next round of funding."
            description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
            cta1={{ label1: "Read more", path1: "/#" }}
            cta2={{ label2: "Get started", path2: "/#" }}
            cta3={{ label3: "Learn more", path3: "/#" }}
          />
        </Banner>
        <Banner
          imageUrl="/business.jpg"
          minHeight="screen"
          alt="business"
          overlayOpacity="50"
        >
          <InfoText
            mode="dark"
            title="Build your next idea even faster."
            subtitle="By the makers of Tailwind CSS"
            description="Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project."
            cta1={{ label1: "Read more", path1: "/#" }}
            cta2={{ label2: "Get started", path2: "/#" }}
            cta3={{ label3: "Learn more", path3: "/#" }}
          />
        </Banner>
        <Banner
          imageUrl="/meeting.jpg"
          minHeight="screen"
          alt="meeting"
          overlayOpacity="50"
        >
          <InfoText
            mode="dark"
            title="Deploy to the cloud with confidence"
            subtitle="What's new: Just shipped v1.0"
            description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
            cta1={{ label1: "Read more", path1: "/#" }}
            cta2={{ label2: "Get started", path2: "/#" }}
            cta3={{ label3: "Learn more", path3: "/#" }}
          />
        </Banner>
        <Banner
          imageUrl="/people.jpg"
          minHeight="screen"
          alt="people"
          overlayOpacity="50"
        >
          <InfoText
            mode="dark"
            title="Supercharge your web applications"
            subtitle="What's new: Just shipped v1.0"
            description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
            cta1={{ label1: "Read more", path1: "/#" }}
            cta2={{ label2: "Get started", path2: "/#" }}
            cta3={{ label3: "Learn more", path3: "/#" }}
          />
        </Banner>
      </Slider>
      <InfoText
        mode="light"
        title="Build your next idea even faster."
        subtitle="By the makers of Tailwind CSS"
        description="Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project."
        cta1={{ label1: "Read more", path1: "/#" }}
        cta2={{ label2: "Get started", path2: "/#" }}
        cta3={{ label3: "Learn more", path3: "/#" }}
      />
      <Banner
        imageUrl="/sunset.jpg"
        minHeight="400px"
        alt="sunset"
        overlayOpacity="75"
      >
        <Stats mode="dark" />
      </Banner>
      <Pricing mode="light">
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </Pricing>
      <Banner
        imageUrl="/sunset.jpg"
        minHeight="screen"
        alt="sunset"
        overlayOpacity="50"
      >
        <InfoText
          mode="dark"
          title="Data to enrich your online business"
          subtitle="Announcing our next round of funding."
          description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
          cta1={{ label1: "Read more", path1: "/#" }}
          cta2={{ label2: "Get started", path2: "/#" }}
          cta3={{ label3: "Learn more", path3: "/#" }}
        />
      </Banner>
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
      <HalfSlider>
        <Banner
          minHeight="600px"
          imageUrl="/sunset.jpg"
          alt="sunset"
          overlayOpacity="50"
        />
        <Banner
          minHeight="600px"
          imageUrl="/team.jpg"
          alt="team"
          overlayOpacity="50"
        />
        <Banner
          minHeight="600px"
          imageUrl="/business.jpg"
          alt="business"
          overlayOpacity="50"
        />
      </HalfSlider>
      <InfoText
        mode="light"
        title="Build your next idea even faster."
        subtitle="By the makers of Tailwind CSS"
        description="Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project."
        cta1={{ label1: "Read more", path1: "/#" }}
        cta2={{ label2: "Get started", path2: "/#" }}
        cta3={{ label3: "Learn more", path3: "/#" }}
      />
      <Images2WText
        mode="light"
        imageUrl1="/sunset.jpg"
        alt1="sunset"
        imageUrl2="/team.jpg"
        alt2="team"
        title="Data to enrich your online business"
        subtitle="Announcing our next round of funding."
        description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
        cta1={{ label1: "Read more", path1: "/#" }}
        cta2={{ label2: "Get started", path2: "/#" }}
        cta3={{ label3: "Learn more", path3: "/#" }}
      />
    </Layout>
  );
}
