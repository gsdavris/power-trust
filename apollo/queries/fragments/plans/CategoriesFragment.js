const CategoriesFragment = `
categories {
    nodes {
          id
          name
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
