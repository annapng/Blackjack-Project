const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    profile: [Profile]    
  }

  type Profile {
    _id: ID
    profileText: String
    profileAuthor: String
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
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProfileText(profileText: String!): Profile
    createGame(_id: String!, gamesPlayed: Int!): Profile
    createWin(_id: String!, wins: Int!): Profile
    createLoss(_id: String!, losses: Int!): Profile
  }
  `;

  module.exports = typeDefs;