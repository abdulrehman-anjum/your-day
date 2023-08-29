import mongoose from "mongoose"

const Schema = mongoose.Schema

const userSchema = new Schema ({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    authorized: [{ //contains the ids of channels, successfully captured by this user
        type: mongoose.Schema.ObjectId,
        ref: "Channel"
    }]
})

const User = mongoose.model('User', userSchema)

export default User