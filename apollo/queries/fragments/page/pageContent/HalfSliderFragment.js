const HalfSliderFragment = `
halfSlider {
        title
        description
        subtitle
        mode
        ctas
        minheight
        image {
          altText
          sourceUrl
        }
        image1 {
          altText
          sourceUrl
        }
        image2 {
          altText
          sourceUrl
        }
        cta {
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
            ... on Plan {
              id
              title
              uri
            }
          }
        }
      }
`;

export default HalfSliderFragment;
