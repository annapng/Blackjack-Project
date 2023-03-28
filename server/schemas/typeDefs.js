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
    addProfileText(userId: ID!, profileText: String!): User
    removeUser: User
    createGame(_id: String!, gamesPlayed: Int!): User
    createWin(_id: String!, wins: Int!): User
    createLoss(_id: String!, losses: Int!): User
  }
  `;

  module.exports = typeDefs;