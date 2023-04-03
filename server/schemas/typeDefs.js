const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    profileText: String
    gamesPlayed: Int
    wins: Int
    losses: Int
  }

  type Auth {
    token: ID!
    user: User
  }
  
  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProfileText(username: String!, profileText: String!): User
    removeUser: User
    createGame(username: String!): User
    createWin(username: String!): User
    createLoss(username: String!): User
  }
  `;

  module.exports = typeDefs;