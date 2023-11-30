import CardsFragment from "./CardsFragment";
import ContentFragment from "./ContentFragment";
import HalfSliderFragment from "./HalfSliderFragment";
import HeroFragment from "./HeroFragment";
import Images2WTextFragment from "./Images2WTextFragment";
import InfoTextFragment from "./InfoTextFragment";
import PricingFragment from "./PricingFragment";
import SliderListFragment from "./SliderListFragment";
import StatsFragment from "./StatsFragment";

const PageContentFragment = `
 pageContent {
    pageSections
    ${InfoTextFragment}
    ${StatsFragment}
    ${PricingFragment}
    ${CardsFragment}
    ${HalfSliderFragment}
    ${Images2WTextFragment}
    ${SliderListFragment}
    ${ContentFragment}
    ${HeroFragment}
}
`;

export default PageContentFragment;
