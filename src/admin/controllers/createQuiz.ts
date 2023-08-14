//create quiz and then redirect to add question page

// a quiz will display in the user profile page
import {Request, Response} from 'express'
import Quiz from '../../quiz/models/quiz'
import { currentUser } from '../../Auth/middlewares/refreshThisUser'

export default async function (req: Request, res: Response){
    const quiz = {
        quiz_name: req.body.quizName===''?undefined:req.body.quizName,
        quiz_creator: currentUser._id,
        questions: []
    }

    console.log("etyid", quiz, Date.now())

    const newQuiz = new Quiz(quiz)
    const q = await newQuiz.save()
    res.redirect('/admin/quiz-list')
}