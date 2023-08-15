import mongoose from "mongoose"

const Schema = mongoose.Schema

const userSchema = new Schema ({
    username: { //input at the time of login
        type: String,
        required: true
    },
    type: { //giver(has admin priveleges) or taker(anyone by default & has to be identified first)
        type: String,
        required: true
    },
    identified: { //after quiz
        type: Boolean,
        default: false
        },
    personal_id: { 
        type: String,
        unique: true
    }
})

const User = mongoose.model('User', userSchema)

export default User