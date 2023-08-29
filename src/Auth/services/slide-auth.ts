import { Request, Response, NextFunction } from "express"
import Session from "../models/sessions"
import setHomepageMode from "../utils/setHomepageMode"
import { currentUser } from "../middlewares/refreshThisUser"
import { channel } from "../../User/controllers/linkHandler"


const authenticated = async (req: Request, res: Response, next: NextFunction)=>{
    const session = await Session.findOne({browserId: req.cookies.b_id})
    const loggedIn = session?.loggedUser?true:false
    const identified = currentUser?.authorized //returns an array //TODO change this to :>check among the array of authorized ids
    console.log("tis chabbel", channel)
    try{
        if (loggedIn){
            if(identified?.includes(channel?._id)){
                next()
            }else{
                res.redirect('q/start/')
            }
        }
        else{
            setHomepageMode(true)
            res.redirect('/')
        }
    }catch(err){
        console.log(err)
    }
   
}

export default authenticated