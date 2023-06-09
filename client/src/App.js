import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Profile from './pages/Profile.js';
import Game from './pages/Game.js';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Rules from './pages/Rules.js';
import Coins from './pages/Coins.js';
import Logout from './pages/Logout.js';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiamFuZUBoZXkuY29tIiwidXNlcm5hbWUiOiJKYW5lRG9lIiwiX2lkIjoiNjQyM2E0OWQyY2Q5NDNmN2Y2NzJhY2ZhIn0sImlhdCI6MTY4MDA1ODA1NywiZXhwIjoxNjgwMDY1MjU3fQ.t3vVotctH3Lmwr6sHH-qSKdlXkPu5dURO0RhvOeaKaA"
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/profile/:username"
                element={<Profile />}
              />
              <Route
                path="/game"
                element={<Game />}
              />
              <Route
                path="/rules"
                element={<Rules />}
              />
              <Route
                path="/coins"
                element={<Coins />}
              />
              <Route
                path="/logout"
                element={<Logout />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
