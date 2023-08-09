import { Request, Response, NextFunction } from "express";
import generateUniqueString from "../utils/randomStringGenerator";
import Session from "../models/sessions";

export default async function(req: Request, res: Response, next: NextFunction){
    

    const clientAlreadyHasB_Id: boolean = req.cookies.b_id?true:false
    console.log("clientAlreadyHasCookies", clientAlreadyHasB_Id)
    if (!clientAlreadyHasB_Id) {
        const b_id = generateUniqueString(23)
        res.cookie('b_id', b_id, {
            maxAge: 2592000000, //30 days expiration
            httpOnly: true,
            sameSite: 'lax'
        })

        const newSession = new Session({browserId: b_id})
        await newSession.save()
    }
    next()
}