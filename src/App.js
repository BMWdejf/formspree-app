import React, { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://django-tutorial-one.vercel.app/projects/', // Zde vložte URL vašeho GraphQL serveru
  cache: new InMemoryCache()
});

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      name
      start_date
      end_date
      comments
      status
    }
  }
`;

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.projects.map((project) => (
        <div key={project.name}>
          <h3>{project.name}</h3>
          <p>Start Date: {project.start_date}</p>
          <p>End Date: {project.end_date}</p>
          <p>Comments: {project.comments}</p>
          <p>Status: {project.status}</p>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>Projects List</h2>
        <Projects />
      </div>
    </ApolloProvider>
  );
};

export default App;
