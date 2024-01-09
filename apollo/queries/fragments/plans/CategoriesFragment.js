const CategoriesFragment = `
categories(first: 100) {
    nodes {
          id
          name
          slug
          posts {
            nodes {
              id
            }
          }
          categoryDetails {
            featured {
              ... on Plan {
                id
                featuredImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
                title
                uri
              }
            }
          }
        }
  }
`;

export default CategoriesFragment;
