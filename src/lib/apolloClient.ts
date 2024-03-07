import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

// console.log(process.env.API_URL);
export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://rickandmortyapi.com/graphql", //process.env.API_URL,
  }),
});
