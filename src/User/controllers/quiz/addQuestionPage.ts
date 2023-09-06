import {Request, Response} from 'express'

const addQuestionPage = async (req: Request, res: Response)=>{

    const quizId = req.params.quizId

    res.render('add-question', {quizId: quizId})
   
}

export default addQuestionPage

