import mongoose from "mongoose"

const Schema = mongoose.Schema

const cardSchema = new Schema ({
    text: String,
    likes: Number,

})

const Card = mongoose.model('Card', cardSchema)

export default Card