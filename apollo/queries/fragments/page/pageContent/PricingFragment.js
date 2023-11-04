const PricingFragment = `
pricing {
        title
        description
        plans {
          ... on Plan {
            id
            title
            excerpt
            features {
              nodes {
                id
                name
              }
            }
            planDetails {
              charges
              relatedLinks
            }
            uri
          }
        }
        mode
      }
`;

export default PricingFragment;
