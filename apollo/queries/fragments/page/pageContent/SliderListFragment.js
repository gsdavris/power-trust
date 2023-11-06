const SliderListFragment = `
sliderList {
        title
        mode
        items {
          ... on Post {
            id
            title
            uri
            categories {
              nodes {
                name
              }
            }
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
          ... on Page {
            id
            title
            uri
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
          ... on Plan {
            id
            title
            uri
            categories {
              nodes {
                name
              }
            }
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }
`;

export default SliderListFragment;
