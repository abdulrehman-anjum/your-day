import mongoose from "mongoose"

const Schema = mongoose.Schema

const sessionSchema = new Schema ({
    browserId: {
        type: String,
        required: true
    },
    loginStatus: {
        type: String,
        required: true
    }
})

const Session = mongoose.model('Session', sessionSchema)

export default Session