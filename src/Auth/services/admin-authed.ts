import { Request, Response, NextFunction } from "express"
import { setRestoreValue } from "./cookie-authed"


const authenticatedAdmin = async (req: Request, res: Response, next: NextFunction)=>{
   
    const clientHasAdminCookies = req.cookies.admincookie
    console.log(clientHasAdminCookies, "does he have buiskits")
    if (clientHasAdminCookies){
        console.log('this????')
        next()
    }else{
        console.log('else auth no cookie')
        setRestoreValue(true)
        res.redirect('/')
    }
}

export default authenticatedAdmin