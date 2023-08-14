import { Response, Request, NextFunction } from "express";
import { emptyAnswersArray } from "../../quiz/services/emptyAnswersArray"
import Session from "../models/sessions";

const logout = async (req: Request, res: Response, next: NextFunction)=>{
    emptyAnswersArray()
    await Session.updateOne({browserId: req.cookies.b_id}, {$unset:  {loggedUser: 1}})
    next()
}

export default logout