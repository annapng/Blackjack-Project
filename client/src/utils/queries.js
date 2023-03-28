import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query Query {
  users {
    _id
    username
    email
    password
    profile {
      _id
      profileText
      profileAuthor
      gamesPlayed
      wins
      losses
    }
  }
}
`;

export const QUERY_SINGLE_USER = gql`
query singleUser($username: String!) {
    user(username: $username) {
      _id
      username
      email
      profile {
        _id
        profileText
        profileAuthor
        gamesPlayed
        wins
        losses
      }
    }
  }
`;

