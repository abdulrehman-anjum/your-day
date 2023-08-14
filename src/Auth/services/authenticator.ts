import { Request, Response, NextFunction } from "express"
import Session from "../models/sessions"
import setHomepageMode from "../utils/setHomepageMode"

const authenticated = async (req: Request, res: Response, next: NextFunction)=>{
    const session = await Session.findOne({browserId: req.cookies.b_id})
    const loggedIn = session?.loggedUser?true:false

    if (loggedIn){next()}
    else{
        setHomepageMode(true)
        res.redirect('/')
    }
}

export default authenticated