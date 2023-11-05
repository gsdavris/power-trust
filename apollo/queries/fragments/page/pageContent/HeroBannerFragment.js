const HeroBannerFragment = `
heroBanner {
    title
    subtitle
    description
    mode
    opacity
    minHeight
    image {
      altText
      sourceUrl
    }
    ctas
    cta {
      fieldGroupName
      label
      type
      url
      urlType
      path {
        ... on Post {
          id
          title
          uri
        }
        ... on Page {
          id
          title
          uri
        }
        ... on MediaItem {
          id
          title
          uri
        }
        ... on Plan {
          id
          title
          uri
        }
      }
    }
    cta1 {
      fieldGroupName
      label
      type
      url
      urlType
       path {
        ... on Post {
          id
          title
          uri
        }
        ... on Page {
          id
          title
          uri
        }
        ... on MediaItem {
          id
          title
          uri
        }
        ... on Plan {
          id
          title
          uri
        }
      }
    }
    cta2 {
      fieldGroupName
      label
      type
      url
      urlType
       path {
        ... on Post {
          id
          title
          uri
        }
        ... on Page {
          id
          title
          uri
        }
        ... on MediaItem {
          id
          title
          uri
        }
        ... on Plan {
          id
          title
          uri
        }
      }
    }
  }
`;

export default HeroBannerFragment;
