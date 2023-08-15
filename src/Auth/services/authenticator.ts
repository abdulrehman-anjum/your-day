import { Request, Response, NextFunction } from "express"
import Session from "../models/sessions"
import setHomepageMode from "../utils/setHomepageMode"
import { currentUser } from "../middlewares/refreshThisUser"

const authenticated = async (req: Request, res: Response, next: NextFunction)=>{
    const session = await Session.findOne({browserId: req.cookies.b_id})
    const loggedIn = session?.loggedUser?true:false
    const identified = currentUser?.identified

    if (loggedIn){
        if(identified){
            next()
        }else{
            res.redirect('/auth/quiz')
        }
    }
    else{
        setHomepageMode(true)
        res.redirect('/')
    }
}

export default authenticated