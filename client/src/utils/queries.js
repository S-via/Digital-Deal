const { gql } = require('@apollo/client');

export const GET_ALL_EVENTS = gql`
query Query($userId: ID!) {
  getAllEvents(userId: $userId) {
    FirstTeam
    SecondTeam
    comments {
      _id
      user {
        username
      }
      text
      timestamp
    }
    description
    odds
    _id
  }
}`

export const GET_USER = gql`
query Query($userId: ID!) {
  getUser(userId: $userId) {
    _id
    friends {
      username
    }
    hostedEvents {
      FirstTeam
      SecondTeam
      description
      _id
    }
    joinedEvents {
      FirstTeam
      SecondTeam
      description
      _id
    }
    username
  }
}`

export const ME = gql`
query Me {
  me {
    _id
    email
    friends {
      _id
    }
    hostedEvents {
      FirstTeam
      SecondTeam
      _id
    }
    joinedEvents {
      FirstTeam
      SecondTeam
      _id
    }
    username
  }
}`