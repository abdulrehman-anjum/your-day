import mongoose from "mongoose"

const Schema = mongoose.Schema

const answerSchema = new Schema ({
    answer: Number,
    valid: Boolean
})

const Answer = mongoose.model('Answer', answerSchema)

export default Answer