import { Response, Request, NextFunction } from "express";
import { emptyAnswersArray } from "../../quiz/services/emptyAnswersArray"
import Session from "../models/sessions";

const logout = async (req: Request, res: Response, next: NextFunction)=>{
    emptyAnswersArray()
    if (req.cookies.b_id) {
        const thisSession = await Session.updateOne({browserId: req.cookies.b_id}, {$unset:  {loggedUser: 1}})
        console.log(thisSession)
    }


    if (req.cookies.admincookie){
        res.clearCookie("admincookie")
    }

    next()

}

export default logout