import {Request, Response} from 'express'
import { answers } from './getAnswer'
import Quiz from '../models/quiz'
import { setQuizQuestions, fetchedQuestions } from '../utils/questions'

const quizPage = async (req: Request, res: Response)=>{


    if (fetchedQuestions.length === 0){
        const quiz = await Quiz.findOne({_id: req.params.quizId}).populate('questions')
        const newQuestions = quiz?.questions?quiz.questions:[]
        setQuizQuestions(newQuestions)
    }
    //get questions from one quiz instead of all
    //get quizId
    //get the questions array populated. and give it to questions that it we are done 
        const questions = fetchedQuestions
        console.log("questions",questions)
        res.render("quiz", {
            question: questions[answers.length]
        })
}

export default quizPage

