import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      password
      email
      username
    }
  }
}
`;

export const ADD_PROFILE = gql`
mutation addProfile($username: String!, $profileText: String!) {
  addProfileText(username: $username, profileText: $profileText) {
    username
    profileText
  }
}
  `;

export const REMOVE_USER = gql`
mutation removeUser {
  removeUser {
    _id
  }
}
`

export const ADD_GAME = gql`
mutation addGame($username: String!) {
  createGame(username: $username) {
    username
    gamesPlayed
  }
}
  `;

export const ADD_WIN = gql`
mutation addWin($username: String!) {
  createWin(username: $username) {
    username
    wins
  }
}
`;

export const ADD_LOSS = gql`
mutation addLoss($username: String!) {
  createLoss(username: $username) {
    username
    losses
  }
}
`;