import {Request, Response} from 'express'
import Question from '../models/question'

const quizPage = async (req: Request, res: Response)=>{

    const questions = await Question.find().lean()
    console.log(questions.length)

    if (Number(req.params.qn?req.params.qn:0)<questions.length){ 
        res.render("quiz", {
            question: questions[Number(req.params.qn?req.params.qn:0)]
        })
    }    
}

export default quizPage

