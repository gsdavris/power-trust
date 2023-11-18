import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus/MenuFragment";
import PageContentFragment from "../fragments/page/pageContent/PageContentFragment";
import CategoriesFragment from "../fragments/plans/CategoriesFragment";
import DefaultSeoFragment from "../fragments/seo/DefaultSeoFragment";
import PageSeoFragment from "../fragments/seo/PageSeoFragment";

export const GET_DYNAMIC_PAGE = gql`
  query GET_DYNAMIC_PAGE($id: ID!) {
      page(id: $id, idType: URI) {
      ${PageSeoFragment}
      ${PageContentFragment}
    }
    ${DefaultSeoFragment}
    ${MenuFragment}   
    ${CategoriesFragment}
  }
`;
