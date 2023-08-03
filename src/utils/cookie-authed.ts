import { Request, Response, NextFunction } from "express"
import { mode, setMode } from "../app"

export let restore: boolean

export async function setRestoreValue(newValue:boolean) {
    restore = newValue
}

const authenticated = async (req: Request, res: Response, next: NextFunction)=>{
    //! check whter the client has our cookie and if he does then next() or otherwise go to authentication page
    //! and set a cookie as auth
    
    const clientHasCookies = false //new user
    
    if (clientHasCookies){
        console.log('this????')
        next()
    }else{
        console.log('else auth no cookie')
        await setMode('login')
        console.log(mode, "actual mode")
        res.redirect('/')
        restore = true
    }
}

export default authenticated