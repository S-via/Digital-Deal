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
        odds : Float!
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
        

    
    
`

module.exports = typeDefs