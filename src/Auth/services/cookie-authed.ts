import { Request, Response, NextFunction } from "express"
import User from "../models/user"

export let restore: boolean

export async function setRestoreValue(newValue:boolean) {
    restore = newValue
}

const authenticated = async (req: Request, res: Response, next: NextFunction)=>{
   
    const clientHasCookies = req.cookies.username
    const loggedOut: string = req.cookies.loggedOut

    const user = await User.find({personal_id: req.cookies.personal_id})
    console.log(user)

    console.log(clientHasCookies, "does he have buiskits", loggedOut)
    // if (clientHasCookies && loggedOut==="false"){
    if (false){
        console.log('this????')
        next()
    }else{
        console.log('else auth no cookie')
        restore = true
        res.redirect('/')
    }
}

export default authenticated