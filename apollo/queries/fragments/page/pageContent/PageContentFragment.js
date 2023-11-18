import CardsFragment from "./CardsFragment";
import ContentFragment from "./ContentFragment";
import HalfSliderFragment from "./HalfSliderFragment";
import HeroBannerFragment from "./HeroBannerFragment";
import HeroSliderFragment from "./HeroSliderFragment";
import Images2WTextFragment from "./Images2WTextFragment";
import InfoTextFragment from "./InfoTextFragment";
import PricingFragment from "./PricingFragment";
import SliderListFragment from "./SliderListFragment";
import StatsFragment from "./StatsFragment";

const PageContentFragment = `
 pageContent {
    pageSections
    ${HeroSliderFragment}
    ${InfoTextFragment}
    ${StatsFragment}
    ${PricingFragment}
    ${HeroBannerFragment}
    ${CardsFragment}
    ${HalfSliderFragment}
    ${Images2WTextFragment}
    ${SliderListFragment}
    ${ContentFragment}
}
`;

export default PageContentFragment;
