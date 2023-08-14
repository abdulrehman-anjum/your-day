import mongoose from "mongoose"
import Question from "./question"
import User from "../../Auth/models/user"

const Schema = mongoose.Schema

const quizSchema = new Schema ({
    quiz_name: {
        type: String,
        required: true
    },
    quiz_creator: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    questions: [{
        type: mongoose.Schema.ObjectId,
        ref: "Question"
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Quiz = mongoose.model('Quiz', quizSchema)

export default Quiz