import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';

const getToken = () => {
  return localStorage.getItem('token') ? localStorage.getItem('token') : 'null';
};

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/v1/graphql',
  headers: {
    Authorization: `bearer ${getToken()}`,
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
);
