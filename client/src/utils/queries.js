import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query Query {
  users {
    _id
    username
    email
    password
    profileText
    gamesPlayed
    wins
    losses
  }
}
`;

export const QUERY_SINGLE_USER = gql`
query singleUser($username: String!) {
  user(username: $username) {
    _id
    username
    email
    password
    profileText
    gamesPlayed
    wins
    losses
  }
}
`;

export const QUERY_ME = gql`
query Query {
  me {
    _id
    username
    email
    password
    profileText
    gamesPlayed
    wins
    losses
  }
}
`;

