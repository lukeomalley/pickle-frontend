import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

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
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
