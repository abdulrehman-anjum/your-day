import {Request, Response} from 'express'
import takeAnswer from '../services/takeAnswer'
import Answer from '../types/answer'
import Question from '../models/question'
import { fetchedQuestions } from '../utils/questions'
export let answers: Answer[] = []

const submitQuiz = async (req: Request, res: Response) => {
    const questions = fetchedQuestions
    await takeAnswer(Number(req.body.option))
    res.redirect(answers.length<questions.length?'/quiz/start':'/quiz/result')        
}

export default submitQuiz