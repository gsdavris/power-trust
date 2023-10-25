import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus/MenuFragment";
import CategoriesFragment from "../fragments/plans/CategoriesFragment";
import DefaultSeoFragment from "../fragments/seo/DefaultSeoFragment";

export const GET_PAGE = gql`
  query MyQuery {
    ${DefaultSeoFragment}
    ${MenuFragment}   
    ${CategoriesFragment}
  }
`;
