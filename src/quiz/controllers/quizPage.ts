import {Request, Response} from 'express'
import { answers } from './getAnswer'
import Quiz from '../models/quiz'
import { setQuizQuestions, fetchedQuestions } from '../utils/questions'

const quizPage = async (req: Request, res: Response)=>{
        let quiz
        if (fetchedQuestions.length === 0){
            quiz = await Quiz.findOne({_id: req.params.quizId}).populate('questions')
            const newQuestions = quiz?.questions?quiz.questions:[]
            setQuizQuestions(newQuestions)
        }
            const questions = fetchedQuestions
            console.log("questions",quiz)
            res.render("quiz", {
                quiz: quiz,
                question: questions[answers.length]
            })
}

export default quizPage

