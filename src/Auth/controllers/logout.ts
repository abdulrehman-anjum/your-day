import { Response, Request, NextFunction }  from "express";
import { emptyAnswersArray }                from "../../quiz/services/emptyAnswersArray"
import Session                              from "../models/sessions";

export default async function (req: Request, res: Response, next: NextFunction){
    emptyAnswersArray()
    const session = await Session.findOne({browserId: req.cookies.b_id})
    const loggedInUser = session?.loggedUser
    if (loggedInUser){
        await Session
        .updateOne({browserId: req.cookies.b_id}, {$unset:  {loggedUser: 1}})
        next()
    } else {
            res.redirect('/a/login')
    }
    
}
