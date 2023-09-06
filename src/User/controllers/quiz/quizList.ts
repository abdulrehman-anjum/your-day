import {Request, Response} from 'express'
import { currentUser } from '../../../Auth/middlewares/refreshThisUser'
import Quiz from '../../../quiz/models/quiz'

export default async function (req: Request, res: Response){

    const quizList = await Quiz.find({quiz_creator: currentUser._id})
    res.render('quiz-list', {quizList: quizList})
}