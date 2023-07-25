import {Request, Response} from 'express'
import takeAnswer from '../services/takeAnswer'
import Answer from '../types/answer'
import { questions } from '../utils/questions'
export let answers: Answer[] = []

const mainQuiz = async (req: Request, res: Response) => {

    takeAnswer(req.body.option)
    console.log(answers);
    
    let qindex: number = answers.length
    console.log(qindex)
    if (qindex<questions.length){
        res.redirect(`/q/${qindex}`)
    } else {
        res.redirect('/result')
    }
}

export default mainQuiz