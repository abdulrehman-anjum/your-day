import { Request, Response } from "express";
import Quiz from "../../../quiz/models/quiz";
export default async function(req: Request, res: Response){
    try {
        const quizId = req.params.quizId
        const quiz = await Quiz.findById(quizId).populate("questions")
        res.render('quiz-page', {quiz: quiz})
    }catch(err){
        console.error(err)
        res.redirect('/page404')
    }
}