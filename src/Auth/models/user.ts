import mongoose from "mongoose"

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
        default: false
    },
    personal_id: { //! Use a random string generator ie hash , used for recognizing the sender and pulling appropriate quiz
        //! use this field as objectId in quiz schema
        type: String
    }
})

const User = mongoose.model('User', userSchema)

export default User