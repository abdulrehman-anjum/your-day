import express, {Request, Response} from 'express'
import { questions } from '../utils/questions'

const home = async (req: Request, res: Response)=>{

    
      
    if (Number(req.params.qn?req.params.qn:0)<questions.length){
        res.render("home", {
            question: Number(req.params.qn?req.params.qn:0)<questions.length?
            questions[Number(req.params.qn?req.params.qn:0)]:
            null,
        })
    }    
}

export default home

