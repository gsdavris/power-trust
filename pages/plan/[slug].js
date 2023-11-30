import client from "../../apollo/client";
import { GET_PLAN } from "../../apollo/queries/plans/get-plan";
import { GET_PLANS_SLUG } from "../../apollo/queries/plans/get-plans";
import Banner from "../../components/contentUI/Banner";
import InfoText from "../../components/contentUI/InfoText";
import PageContent from "../../components/contentUI/PageContent";
import Layout from "../../components/layouts/Layout";
import SinglePricingSection from "../../components/sections/SinglePricingSection";

export default function PlanPage({ data }) {
  const { plan } = data;
  return (
    <Layout data={data}>
      <section>
        <Banner
          imageUrl={plan?.featuredImage?.node?.sourceUrl}
          minHeight="min-h-[600px]"
          alt={plan?.featuredImage?.node?.altText}
          overlayOpacity="50"
        >
          <InfoText
            mode="dark"
            title={plan?.title}
            subtitle={
              plan?.categories?.nodes[0]?.name +
              " / " +
              plan?.categories?.nodes[1]?.name
            }
          />
        </Banner>
      </section>
      <SinglePricingSection plan={plan} />
      <PageContent content={plan?.pageContent} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { data, errors } = await client.query({
    query: GET_PLAN,
    variables: {
      id: params?.slug,
    },
  });

  return {
    props: { data: data || {} },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_PLANS_SLUG,
  });

  const pathsData = [];

  data?.plans?.nodes &&
    data?.plans?.nodes.map((plan) => {
      plan.slug && pathsData.push({ params: { slug: plan?.slug } });
    });

  return {
    paths: pathsData,
    fallback: false,
  };
}
