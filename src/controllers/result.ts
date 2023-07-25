import {Request, Response} from 'express'
import { answers } from './mainQuiz'
import { questions } from '../utils/questions'
import results from '../services/calcResult'

const result = async (req: Request, res: Response)=>{
    const answerKey = questions.map(question => question.options[question.correct]); //put in string not the number in answerKey
    console.log("answer key", answerKey)
    const userAnswers = JSON.parse(JSON.stringify(answers)) as typeof answers
    console.log("iser amserrr",userAnswers)
    answers.splice(0, answers.length) 
    console.log("iser amserrr",userAnswers)
    results(userAnswers, answerKey)
    res.render('results', {results: userAnswers})
}

export default result