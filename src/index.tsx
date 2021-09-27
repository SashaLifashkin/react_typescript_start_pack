import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { ApolloProvider } from '@apollo/client';
import { client } from './ApiQuery';
import { App } from './App';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
