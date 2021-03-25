const express = require('express');
const morgan = require('morgan');
const UserAPI = require('./api/UserAPI');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      usersAPI: new UserAPI(),
    };
  },
});

server.applyMiddleware({ app });

// Log middleware
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);

// this route mimic a REST API that we can use as DataSourceREST for GraphQL
app.get('/api/users', async (req, res) => {
  await new Promise(r => setTimeout(r, 3000));
  res.json(require('./db/users.json'));
});

// Fallback route
app.use((req, res) => {
  res.status(404);
  res.send('Not Found');
  res.end();
});

app.listen({ port: 4000 }, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
});
