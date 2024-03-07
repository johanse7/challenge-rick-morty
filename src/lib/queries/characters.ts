import { FilterParamsType } from "@/lib/types/params";
import { gql } from "@apollo/client";

export const GET_CHARACTERS = (filter: FilterParamsType) => {
  const { gender = "", name = "", species = "", status = "", page } = filter;
  const currentPage = Number(page) || 1;

  return gql(`
  query {
     characters(page: ${currentPage}, filter: { name: "${name}", status: "${status}", species: "${species}", gender:"${gender}"  }) {
      info {
        count,
        pages
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
};

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

export const GET_TOTAL_PAGES = (filter: FilterParamsType) => {
  const { gender = "", name = "", species = "", status = "" } = filter;

  return gql(`
  query   {
     characters(page: 1, filter: { name: "${name}", status: "${status}", species: "${species}", gender:"${gender}"  }) {
      info {
        pages
      }
      
    }
  }
`);
};
