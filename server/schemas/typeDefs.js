const typeDefs = `
    type User { 
        _id: ID!
        username: String!
        email: String!
        password: String!
        hostedEvents: [Event]!
        joinedEvents: [Event]!
        friends: [User]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Event { 
        _id: ID!
        firstTeam: String!
        secondTeam: String!
        description: Text!
        odds : Int!
        comments: [Comment]!
    }
    
    

    type Comment {
        _id: ID!
        user: User
        text: Text!
        timestamp: String!
    }

    type Query {
        getAllEvents: [Event!]!
        getEvent(id: ID!): Event
        getUser(id: ID!): User
    }

    input EventInput {
        FirstTeam: String!
        SecondTeam: String!
        description: Text!
        odds: Int!
    }

    type Mutation { 
        createEvent(event: EventInput!): User
        login(email: String!, password: String!): Auth
        signup(username: String!, email: String!, password: String!): Auth
        createComment(eventId: ID!, text: String!): Comment
        addFriend(username: String!): [User]
        deleteEvent(_id: ID!): Event
    }

    
    
`

module.exports = typeDefs