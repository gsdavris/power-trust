import client from "../apollo/client";
import PageContent from "../components/contentUI/PageContent";
import Layout from "../components/layouts/Layout";
import { GET_PAGE } from "../apollo/queries/pages/get-page";
import { GET_PAGES_SLUG } from "../apollo/queries/pages/get-pages";

export default function DynamicPage({ data }) {
  const { page } = data;

  return (
    <Layout data={data}>
      <PageContent content={page?.pageContent} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { data, errors } = await client.query({
    query: GET_PAGE,
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
    query: GET_PAGES_SLUG,
  });

  // console.log(
  //   data?.pages?.nodes
  //     .map((page) => `/${page.slug}`)
  //     .filter((i) => i !== "/news" && i !== "/"),
  // );

  return {
    paths:
      data?.pages?.nodes
        .map((page) => `/${page.slug}`)
        .filter((i) => i !== "/news" && i !== "/") || [],
    fallback: false,
  };
}
