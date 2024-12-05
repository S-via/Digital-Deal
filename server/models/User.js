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
        friends: [User],

        
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
)


uesrSchema.methods.isCorrectPassword = async function (password){ 
    return bcrypt.compare(password, this.password)
}

const User = model('User', uesrSchema )

module.exports = User;
