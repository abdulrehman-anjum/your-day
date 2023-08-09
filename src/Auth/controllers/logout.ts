import { Response, Request, NextFunction } from "express";
import { emptyAnswersArray } from "../../quiz/services/emptyAnswersArray"
import Session from "../models/sessions";

const logout = async (req: Request, res: Response, next: NextFunction)=>{
    emptyAnswersArray()
    console.log("empty array now")
    if (req.cookies.b_id) {
        console.log("yesss about to logout ")
        const thisSession = await Session.updateOne({browserId: req.cookies.b_id}, {$unset:  {loggedUser: 1}})
        console.log("successssss?",thisSession)
    }


    // if (req.cookies.admincookie){
    //     res.clearCookie("admincookie")
    // }

    next()

}

export default logout