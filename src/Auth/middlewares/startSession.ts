import { Request, Response, NextFunction }  from "express";
import generateUniqueString                 from "../utils/randomStringGenerator";
import Session                              from "../models/sessions";

export default async function(req: Request, res: Response, next: NextFunction){
    const clientHasB_Id: boolean = req.cookies.b_id?true:false

    if (!clientHasB_Id) { //no cookie, no session
        const b_id = generateUniqueString(23)
        res.cookie('b_id', b_id, {
            maxAge: 2505600000, //29 days expiration
            httpOnly: true,
            // secure: true,
            sameSite: 'lax'})
        const newSession = new Session({browserId: b_id})
        await newSession.save()
    } else { //already has the cookie but no session on our db
        const session = await Session.findOne({browserId: req.cookies.b_id})
        if (!session){
            const newSession = new Session({browserId: req.cookies.b_id})
            await newSession.save()
        }
    }
    //if user cleared cookies then we have to make a new session and cookie for him.
    next()
}