const { gql } = require("apollo-server-express");
const { matchSorter } = require("match-sorter");
const db = require("./data/db.json");

const typeDefs = gql`
  type User {
    _id: String
    picture: String
    age: Int
    name: String
    email: String
    eyeColor: String
    company: String
    friends: [Friend]
  }

  type Users {
    _id: String
    index: String
    picture: String
    age: Int
    name(name: String): String
    email: String
    eyeColor: String
    company: String
    friends: [Friend]
  }

  type Friend {
    _id: String
    index: String
    picture: String
    age: Int
    name(name: String): String
    email: String
    eyeColor: String
    company: String
  }

  type Query {
    list(name: String): [Users]
    user(id: String!): User
  }
`;

const resolvers = {
  Query: {
    list: async (_, { name }) =>
      name ? matchSorter(db, name, { keys: ["name"] }) : db,
    user: async (_, { id }) => db.filter((user) => user._id === id)[0],
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
