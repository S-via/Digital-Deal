const typeDefs = `
 type User {
  _id: ID!
  username: String!
  email: String!
  password: String!
  hostedEvents: [Event]
  joinedEvents: [Event]
  friends; [User]
 }

 type Event {
  _id: ID!
  firstTeam: String!
  secondTeam: String!
  description: Text
  odds: Float!
  comments: [Comment]
  competitors: [User]
 }

 type Comments {
  _id: ID!
  user: User!
  text: String!
 }

 type Auth{
  token: ID!
  user: User!
 }

 type Query {
  user(_id: ID!): Profile
  event(user: ID!): [Event]
  comments(user: ID!): Comment
 }

 input EventInput {
  firstTeam: String!
  secondTeam: String!
  description: String!
  odds: Int!
 }
 
 input CreatedComment {
  event: ID!
  text: String!
 }

 type Mutation {
  createEvent(eventInput: EventInput!): User
  login(email: String, password: String): Auth
  signup(username: String, email: String, password: String): User
  createComment(createdComment: CreatedComment): Comment
  addFriend(username: String!): [User]
  deleteEvent(_id: ID!): Event
 }
`

module.exports = typeDefs