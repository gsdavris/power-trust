const PlanFragment = `
    id
    categories {
        nodes {
        id
        name
        uri
        parent {
            node {
            id
            name
            uri
            }
        }
        }
    }
    excerpt
    featuredImage {
        node {
        altText
        sourceUrl
        }
    }
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
    title
`;

export default PlanFragment;
