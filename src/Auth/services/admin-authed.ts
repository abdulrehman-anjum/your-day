import { Request, Response, NextFunction } from "express"
import setHomepageMode from "../utils/setHomepageMode"

const authenticatedAdmin = async (req: Request, res: Response, next: NextFunction)=>{
   
    const clientHasAdminCookies = req.cookies.admincookie
    console.log(clientHasAdminCookies, "does he have buiskits")
    if (clientHasAdminCookies){
        console.log('this????')
        next()
    }else{
        console.log('else auth no cookie')
        setHomepageMode(true)
        res.redirect('/')
    }
}

export default authenticatedAdmin