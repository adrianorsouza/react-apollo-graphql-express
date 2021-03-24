import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import FriendsList from './pages/FriendsList';
import Layout from './containers/Layout';
import { client } from './graphql/client';
import NoMatch from "./pages/NoMatch";
import ConnectivityListener from "./containers/ConnectivityListener";

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
              <FriendsList />
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
