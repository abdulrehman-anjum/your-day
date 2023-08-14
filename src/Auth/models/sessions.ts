import mongoose from "mongoose"

const Schema = mongoose.Schema

const sessionSchema = new Schema ({
    browserId: {
        type: String,
        required: true
    },
    loggedUser: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    createdAt: {
        type: Date,
        expires: '30d',
        default: Date.now
    }
})

const Session = mongoose.model('Session', sessionSchema)

export default Session