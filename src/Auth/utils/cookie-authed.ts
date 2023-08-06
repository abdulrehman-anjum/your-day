import { Request, Response, NextFunction } from "express"

export let restore: boolean

export async function setRestoreValue(newValue:boolean) {
    restore = newValue
}

const authenticated = async (req: Request, res: Response, next: NextFunction)=>{
   
    const clientHasCookies = req.cookies.username
    const loggedOut: string = req.cookies.loggedOut
    console.log(clientHasCookies, "does he have buiskits", loggedOut)
    if (clientHasCookies && loggedOut==="false"){
        console.log('this????')
        next()
    }else{
        console.log('else auth no cookie')
        restore = true
        res.redirect('/')
    }
}

export default authenticated