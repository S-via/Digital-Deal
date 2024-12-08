const { gql } = require('@apollo/client');

export const ADD_USER = gql`
mutation Signup($username: String!, $email: String!, $password: String!) {
  signup(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}`

export const LOGIN = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}`

export const ADD_EVENT = gql`
mutation CreateEvent($eventDetails: EventInput!) {
  createEvent(eventDetails: $eventDetails) {
    _id
  description
    FirstTeam
  }
}`

export const DELETE_EVENT = gql`
mutation DeleteEvent($id: ID!) {
  deleteEvent(_id: $id) {
    _id
  }
}`

