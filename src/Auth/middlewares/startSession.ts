import { Request, Response, NextFunction } from "express";
import generateUniqueString from "../utils/randomStringGenerator";

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
    }
    next()
}