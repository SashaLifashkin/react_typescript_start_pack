import {
  ApolloClient,
  InMemoryCache,
  gql,
} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
});

export const API_DATA = gql`
{
  continents {
    code,
    name,
    countries {
      code,
      name,
      languages {
        code,
        name,
      }
    }
  }
}
`;
