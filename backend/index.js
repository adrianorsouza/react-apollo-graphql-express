const express = require("express");
const morgan = require('morgan')
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schema");

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// show the entire db.json
app.get("/users", (req, res) => {
  res.json(require("./data/db.json"));
});

app.use((req, res) => {
  res.status(200);
  res.send("Not Found");
  res.end();
});

app.listen({ port: 4000 }, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
});
