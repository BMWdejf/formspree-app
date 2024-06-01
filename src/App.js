// App.js
import React from 'react';
import { ApolloProvider, client, DataDisplay } from './GraphQl';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>Project List</h2>
        <DataDisplay />
      </div>
    </ApolloProvider>
  );
};

export default App;
