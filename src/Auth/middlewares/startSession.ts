import { Request, Response, NextFunction } from "express";
import generateUniqueString from "../utils/randomStringGenerator";
import Session from "../models/sessions";
import sessions from "../types/sessions";
export let thisSession: any //! this is bad, find another way, dont use *'Any'

export default async function(req: Request, res: Response, next: NextFunction){
    
    const b_id = generateUniqueString(23)

    const clientAlreadyHasB_Id: boolean = req.cookies.b_id?true:false
    console.log("clientAlreadyHasCookies", clientAlreadyHasB_Id)
    if (clientAlreadyHasB_Id) {
        const session = await Session.find({browserId: req.cookies.b_id})
        thisSession = session
    } else {
        // res.cookie('b_id', b_id)
        const session: sessions = {
            browserId: b_id,
            loginStatus: true
        }
        const newSession = new Session(session)
        thisSession = newSession
        // await newSession.save()
        console.log("new session" ,newSession)    
    }

    
    next()
}