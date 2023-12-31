import {Request, Response} from 'express'
import QuestionType from '../../../quiz/types/question'
import Question from '../../../quiz/models/question'
import Quiz from '../../../quiz/models/quiz'


const addQuestion = async (req: Request, res: Response) => {
    const options: Array<string> = [req.body.a, req.body.b, req.body.c]
    const question: QuestionType = {
        question: req.body.question,
        options: options,
        correct: Number(req.body.correct)
    }

    const newQuestion = new Question(question)
    const q = await newQuestion.save()
    //push the question in quiz
    await Quiz.findByIdAndUpdate(req.params.quizId, { $push: {questions: q._id}})
    
    res.redirect(`/u/quiz/${req.params.quizId}`)
}

export default addQuestion