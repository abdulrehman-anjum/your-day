import mongoose from "mongoose"

const Schema = mongoose.Schema

const questionSchema = new Schema ({
    question: String,
    options: [{type: String}],
    correct: Number
})

const Question = mongoose.model('Question', questionSchema)

export default Question