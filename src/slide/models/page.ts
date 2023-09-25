import mongoose from "mongoose"

const Schema = mongoose.Schema

const pageSchema = new Schema ({
    page_creator: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    page_name: {
        type: String,
        required: true
    },
    page_desc: {
        type: String,
    },
    image: {
        type: mongoose.Schema.ObjectId,
        ref: "Image"
    },
    audio: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Page = mongoose.model('Page', pageSchema)

export default Page