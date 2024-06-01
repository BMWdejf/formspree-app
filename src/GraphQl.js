// GraphQL.js
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://django-tutorial-one.vercel.app/graphql/', // Zde vložte URL vašeho GraphQL serveru
  cache: new InMemoryCache()
});

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      name
      comments
    }
  }
`;

const DataDisplay = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h3>Projects</h3>
      <ul>
        {data.projects.map((project) => (
          <li key={project.name}>
            <strong>{project.name}:</strong> {project.comments}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ApolloProvider, client, DataDisplay };
