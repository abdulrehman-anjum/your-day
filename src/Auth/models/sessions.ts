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
    }
})

const Session = mongoose.model('Session', sessionSchema)

export default Session