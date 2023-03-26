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
        username
      }
    }
  }
`;

export const ADD_PROFILE = gql`
mutation addProfile($profileText: String!) {
    addProfileText(profileText: $profileText) {
      _id
      profileText
      profileAuthor
    }
  }
  `;

export const ADD_GAME = gql`
mutation addGame($createGameId2: String!, $gamesPlayed: Int!) {
    createGame(_id: $createGameId2, gamesPlayed: $gamesPlayed) {
      gamesPlayed
    }
  }
  `;

export const ADD_WIN = gql`
mutation addWin($createWinId2: String!, $wins: Int!) {
    createWin(_id: $createWinId2, wins: $wins) {
      wins
    }
  }
`;

export const ADD_LOSS = gql`
mutation addLoss($createLossId2: String!, $losses: Int!) {
    createLoss(_id: $createLossId2, losses: $losses) {
      losses
    }
  }
`;