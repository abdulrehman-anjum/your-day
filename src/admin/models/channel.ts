import mongoose from "mongoose"

const Schema = mongoose.Schema

const channelSchema = new Schema ({
    channelName: {
        type: String,
        unique: true
    },
    quizId: {
        type: mongoose.Schema.ObjectId,
        ref: "Quiz",
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