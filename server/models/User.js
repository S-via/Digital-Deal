const {Schema, model} =require('mongoose');
const bcrypt = require('bcryptjs')


const uesrSchema = new Schema(
    {
        username: {
            type: String,
            required: true, 
            unique: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
            match: [/.+@+\..+/, 'Valid Email Required'],
        },
        password: {
            type: String,
            required: true,

        },
        hostedEvents: [Event],
        joinedEvents: [Event],
        

        
    }
)