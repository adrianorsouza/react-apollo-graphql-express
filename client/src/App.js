import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import FriendsList from './pages/FriendsList';
import Layout from './components/Layout';
import { client } from './graphql/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/profile/:id">
              <FriendsList />
            </Route>
            <Route>
              <h1>Page Not Found!</h1>
            </Route>
          </Switch>
        </Router>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
