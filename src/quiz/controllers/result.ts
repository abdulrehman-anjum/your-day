import {Request, Response} from 'express'
import { answers } from './getAnswer'
// import { questions } from '../utils/questions'
import results from '../services/calcResult'
import Question from '../models/question'
import QuestionType from '../types/question'

const result = async (req: Request, res: Response)=>{
    const questions: QuestionType[] = await Question.find().lean()
    // const answerKey: Array<number> = questions.map(question => Number(question.correct)); 
    const userAnswers = JSON.parse(JSON.stringify(answers)) as typeof answers
    console.log("iser amserrr",userAnswers)
    answers.splice(0, answers.length) 
    console.log("iser amserrr",userAnswers)
    results(userAnswers, questions)
    res.render('results', {results: userAnswers})
}

export default result