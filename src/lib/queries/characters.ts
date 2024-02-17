import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql(`
  query {
    characters(page: 1) {
      info {
        count
      }
      
      results {
        id
        name
        image
        species
      }
    }
  }
`);
