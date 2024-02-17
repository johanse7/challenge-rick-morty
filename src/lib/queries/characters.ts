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
// GetCharactersById($id: String)
export const GET_CHARACTERS_BY_ID = (id: string) => gql`
  query  {
    character(id: ${id}) {
      id
      name
      species
      image
      status
      type
      gender
    }
  }
`;
