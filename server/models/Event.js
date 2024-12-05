const {Schema, model} = require('mongoose')

const User = require('./User')
const Comment = require('./Comment')

const eventSchema = new Schema(
    {
        FirstTeam: {
            type: String, 
            required: true,
        },
        SecondTeam: {
            type: String,
            required: true,
        },
        description: {
            type: Text,
            required: true
        },
        odds: {
            type: Int,
            required: true,
        },
        competitors: [User],
        comments: [Comment],
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)

const Event = model('Event', eventSchema);

module.exports = Event