import {Request, Response} from 'express'

const addQuestionPage = async (req: Request, res: Response)=>{

    res.render('add-question')
   
}

export default addQuestionPage

