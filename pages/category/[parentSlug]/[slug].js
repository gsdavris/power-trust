import client from "../../../apollo/client";
import { GET_CATEGORIES_SLUG } from "../../../apollo/queries/plans/get-categories";
import { GET_CATEGORY } from "../../../apollo/queries/plans/get-category";
import Banner from "../../../components/contentUI/Banner";
import InfoText from "../../../components/contentUI/InfoText";
import PageContent from "../../../components/contentUI/PageContent";
import Layout from "../../../components/layouts/Layout";
import SingleSliderList from "../../../components/sections/SingleSliderList";

export default function CategoryPage({ data }) {
  const { category } = data;
  return (
    <Layout data={data}>
      <section>
        <Banner
          imageUrl={category?.categoryDetails?.featuredImage?.sourceUrl}
          minHeight="min-h-[600px]"
          alt={category?.categoryDetails?.featuredImage?.altText}
          overlayOpacity="50"
        >
          <InfoText
            mode="dark"
            title={category?.name}
            subtitle={category?.parent?.node.name}
            htmlDescription={category?.description}
          />
        </Banner>
      </section>
      <PageContent content={category?.pageContent} />
      <SingleSliderList
        mode="dark"
        title="Προγράμματα σε αυτή την κατηγορία"
        items={category.plans.nodes}
      />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { data, errors } = await client.query({
    query: GET_CATEGORY,
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
    query: GET_CATEGORIES_SLUG,
  });

  const pathsData = [];

  data?.categories?.nodes &&
    data?.categories?.nodes.map((category) => {
      category.slug &&
        category?.children?.nodes.length === 0 &&
        category.slug !== "ataxinomita" &&
        category.slug !== "revma" &&
        category.slug !== "aerio" &&
        category.slug !== "ta-panta-gia-tin-energeia" &&
        pathsData.push({
          params: {
            parentSlug: category?.parent?.node?.slug,
            slug: category?.slug,
          },
        });
    });

  return {
    paths: pathsData,
    fallback: false,
  };
}
