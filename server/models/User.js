const {Schema, model} =require('mongoose');
const bcrypt = require('bcryptjs')

const Event = require('./Event')


const userSchema = new Schema(
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
            match: [/.+@.+\..+/, 'Valid Email Required'],
        },
        password: {
            type: String,
            required: true,

        },
        hostedEvents: [{
            type: Schema.Types.ObjectId,
            ref: 'Event'
        }],
        joinedEvents: [{
            type: Schema.Types.ObjectId,
            ref: 'Event'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }],

        
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
)


userSchema.methods.isCorrectPassword = async function (password){ 
    return bcrypt.compare(password, this.password)
}

const User = model('User', userSchema )

module.exports = User;
