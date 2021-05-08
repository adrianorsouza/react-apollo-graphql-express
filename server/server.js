const express = require('express');
const path = require('path');
const morgan = require('morgan');
const UserAPI = require('./api/UserAPI');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    usersAPI: new UserAPI(),
  })
});

server.applyMiddleware({ app });

// Log middleware
app.use(
  morgan('dev')
);

// This route mimic a REST API that we can use as DataSourceREST for GraphQL
app.get('/api/users', async (req, res) => {
  // await new Promise(r => setTimeout(r, 3000));
  res.json(require('./db/users.json'));
});

// This route will serve the production version of React App within the client/build directory
// it was just defined to make it ease to deploy this stack at heroku
app.use('/', express.static(path.join(__dirname, 'build')));

// Fallback route that's display 404
app.use((req, res) => {
  res.status(404);
  res.send('Not Found');
  res.end();
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is ready at http://localhost:${port}`);
});
