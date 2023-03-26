import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
users {
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

export const QUERY_ME = gql`
  query me {
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