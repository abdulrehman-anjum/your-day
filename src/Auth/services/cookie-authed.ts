import { Request, Response, NextFunction } from "express"
import User from "../models/user"
import Session from "../models/sessions"

export let restore: boolean

export async function setRestoreValue(newValue:boolean) {
    restore = newValue
}

const authenticated = async (req: Request, res: Response, next: NextFunction)=>{
   

    let ourSession
    if (req.cookies.b_id) {
        ourSession = await Session.findOne({browserId: req.cookies.b_id}).lean()
    }

    console.log("Our SESSION",ourSession)
    



    const loggedIn = false

    if (loggedIn){
        console.log('this????')
        next()
    }else{
        console.log('else auth no cookie')
        restore = true
        res.redirect('/')
    }
}

export default authenticated