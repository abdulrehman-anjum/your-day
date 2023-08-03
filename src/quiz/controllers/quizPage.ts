import {Request, Response} from 'express'
import Question from '../models/question'
import { answers } from './getAnswer'

const quizPage = async (req: Request, res: Response)=>{

    const questions = await Question.find().lean()
    console.log(questions.length)
        res.render("quiz", {
            question: questions[answers.length]
        })
        
}

export default quizPage

