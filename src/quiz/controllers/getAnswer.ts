import {Request, Response} from 'express'
import takeAnswer from '../services/takeAnswer'
import Answer from '../types/answer'
import Question from '../models/question'
export let answers: Answer[] = []

const submitQuiz = async (req: Request, res: Response) => {
    const questions = await Question.find().lean()
    await takeAnswer(Number(req.body.option))
    let qindex: number = answers.length
    console.log(qindex, "qn")
    qindex<questions.length?res.redirect(`/quiz/start/${qindex}`):res.redirect('/quiz/result')
}

export default submitQuiz