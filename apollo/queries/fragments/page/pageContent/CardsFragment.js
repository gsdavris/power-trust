const CardsFragment = `
cards {
        imageHeight
        mode
        cardItems {
          name
          description
          uri
          parent {
            node {
              name
            }
          }
          categoryDetails {
            iconColor
            iconName
            featuredImage {
              altText
              sourceUrl
            }
          }
        }
      }
`;

export default CardsFragment;
