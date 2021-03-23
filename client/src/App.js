import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile/:id">
            <Profile />
          </Route>
          <Route>
            <h1>Page Not Found!</h1>
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
