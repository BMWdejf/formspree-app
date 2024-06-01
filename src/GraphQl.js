// GraphQL.js
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql', // Zde vložte URL vašeho GraphQL serveru
  cache: new InMemoryCache()
});

const GET_DATA = gql`
  query GetData {
    continents {
      code
    }
    countries {
      code
    }
    languages {
      code
    }
  }
`;

const DataDisplay = () => {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h3>Continents</h3>
      <ul>
        {data.continents.map((continent) => (
          <li key={continent.code}>{continent.code}</li>
        ))}
      </ul>

      <h3>Countries</h3>
      <ul>
        {data.countries.map((country) => (
          <li key={country.code}>{country.code}</li>
        ))}
      </ul>

      <h3>Languages</h3>
      <ul>
        {data.languages.map((language) => (
          <li key={language.code}>{language.code}</li>
        ))}
      </ul>
    </div>
  );
};

export { ApolloProvider, client, DataDisplay };
