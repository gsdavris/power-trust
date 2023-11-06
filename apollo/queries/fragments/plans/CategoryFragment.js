const CategoryFragment = `
  id
  parent {
    node {
      id
      name
      uri
    }
  }
  plans {
    nodes {
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
  }
  name
  uri 
  categoryDetails {
    iconColor
    iconName
    featuredImage {
      altText
      sourceUrl
    }
  }
  description
`;

export default CategoryFragment;
