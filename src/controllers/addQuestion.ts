import {Request, Response} from 'express'
import QuestionType from '../types/question'
import Question from '../models/question'

const addQuestion = async (req: Request, res: Response) => {
    const options: Array<string> = [req.body.a, req.body.b, req.body.c]
    const question: QuestionType = {
        question: req.body.question,
        options: options,
        correct: Number(req.body.correct)
    }

    const newQuestion = new Question(question)
    newQuestion.save()
    
    
    res.redirect('/admin')
}

export default addQuestion