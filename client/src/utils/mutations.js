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
mutation addProfile($userId: ID!, $profileText: String!) {
  addProfileText(userId: $userId, profileText: $profileText) {
    _id
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
mutation addGame($id: String!, $gamesPlayed: Int!) {
  createGame(_id: $id, gamesPlayed: $gamesPlayed) {
    _id
    gamesPlayed
  }
}
  `;

export const ADD_WIN = gql`
mutation addWin($id: String!, $wins: Int!) {
  createWin(_id: $id, wins: $wins) {
    _id
    wins
  }
}
`;

export const ADD_LOSS = gql`
mutation addLoss($id: String!, $losses: Int!) {
  createLoss(_id: $id, losses: $losses) {
    _id
    losses
  }
}
`;