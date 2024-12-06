const {Schema, model} = require('mongoose')

const commentSchema = new Schema(
    {
        user: User,
        text: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            virtuals: true
        },
        timestamps: true
    }
)


module.exports = commentSchema

