import HeroSliderFragment from "./HeroSliderFragment";
import InfoTextFragment from "./InfoTextFragment";
import PricingFragment from "./PricingFragment";
import StatsFragment from "./StatsFragment";

const PageContentFragment = `
 pageContent {
    pageSections
    ${HeroSliderFragment}
    ${InfoTextFragment}
    ${StatsFragment}
    ${PricingFragment}
}
`;

export default PageContentFragment;
