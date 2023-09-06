import mongoose from "mongoose"

const Schema = mongoose.Schema

const channelSchema = new Schema ({
    channel_creator:{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    channelName: {
        type: String,
        unique: true
    },
    quizId: {
        type: mongoose.Schema.ObjectId,
        ref: "Quiz",
        required: true
    },
    slideId: {
        type: mongoose.Schema.ObjectId,
        ref: "Slide",
        required: true
    },
    expirePoints: {
        type: Number,
        default: 3
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Channel = mongoose.model('Channel', channelSchema)

export default Channel