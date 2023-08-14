import { Request, Response } from "express";
import Quiz from "../../quiz/models/quiz";
export default async function(req: Request, res: Response){
    //display questions and add question btn
    const quizId = req.params.quizId
    const quiz = await Quiz.findById(quizId)
    res.render('quiz-page', {quiz: quiz})
}