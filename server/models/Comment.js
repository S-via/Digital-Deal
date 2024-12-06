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

const Comment = model('Comment', commentSchema)

module.exports = Comment

