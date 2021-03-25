import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { Layout } from './containers';
import { client } from './graphql/client';
import NoMatch from './pages/NoMatch';
import ConnectivityListener from './containers/ConnectivityListener';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/profile/:id">
              <Profile />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </Layout>
      </Router>
      <ConnectivityListener />
    </ApolloProvider>
  );
}

export default App;
