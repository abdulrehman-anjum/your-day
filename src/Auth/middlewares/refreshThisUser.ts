import { Request, Response, NextFunction } from "express";
import { setThisUser } from "../controllers/login";
import Session from "../models/sessions";
import User from "../models/user";

export default async function(req: Request, res: Response, next: NextFunction){
    const b_id = req.cookies.b_id

    const session = await Session.findOne({browserId: b_id})
    console.log("sesssiooonn refreeshh", session)
    const username = session?.loggedUser
    const newValueOfThisUser = await User.findOne({_id: username})
    setThisUser(newValueOfThisUser)
    console.log("refreshhhh", newValueOfThisUser)
    
    next()
}