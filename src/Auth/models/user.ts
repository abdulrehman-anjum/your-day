import mongoose from "mongoose"
import Session from "./sessions"

const Schema = mongoose.Schema

const userSchema = new Schema ({
    username: { //input at the time of login
        type: String,
        required: true
    },
    type: { //giver(has admin priveleges) or taker(anyone by default & has to be identified)
        type: String,
        required: true
    },
    identified: { //after quiz
        type: Boolean,
        default: false,
        required: true
    },
    personal_id: { //! Use a random string generator ie hash , used for recognizing the sender and pulling appropriate quiz
        //! use this field as objectId in quiz schema
        type: String,
        unique: true
    },
    sessions: [{
        type: mongoose.Schema.ObjectId,
        ref: "Session",
        required: true

        //!username, browserID > browser
        //!username ===> SESSIONS = [{ browerID: "string324", loggedIN: true | false }] as type
        //!another browser, another ID

    }],
    deviceCount: {
        type: Number,
        default: 0
    }
})

const User = mongoose.model('User', userSchema)

export default User