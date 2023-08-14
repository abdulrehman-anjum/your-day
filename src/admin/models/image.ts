import mongoose from "mongoose"
import { currentUser } from "../../Auth/middlewares/refreshThisUser"

const Schema = mongoose.Schema

const imageSchema = new Schema ({
    url: {
        type: String,
        required: true
    },
    uploader: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Image = mongoose.model('Image', imageSchema)

export default Image