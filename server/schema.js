const { gql } = require('apollo-server-express');

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
    list(name: String): [User]
    user(id: String!): User
  }
`;

module.exports = typeDefs;
