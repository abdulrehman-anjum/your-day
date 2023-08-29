import mongoose from "mongoose"

const Schema = mongoose.Schema

const slideSchema = new Schema ({
    slide_name: {
        type: String,
        required: true
    },
    slide_creator: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    pages: [{
        type: mongoose.Schema.ObjectId,
        ref: "Page"
    }],
    // slide_audio: {
    //     type: String
    // },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Slide = mongoose.model('Slide', slideSchema)

export default Slide