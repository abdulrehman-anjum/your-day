import { Request, Response, NextFunction } from "express"
import Session from "../models/sessions"
import { currentUser } from "../middlewares/refreshThisUser"
import { channel } from "../../User/controllers/channels/linkHandler"


const authenticated = async (req: Request, res: Response, next: NextFunction)=>{
    const session = await Session.findOne({browserId: req.cookies.b_id})
    const loggedIn = session?.loggedUser?true:false
    const identified = currentUser?.authorized //returns an array 
    try{
        if (loggedIn){
            if (!channel){
                res.redirect('/404')
            }else
            if(identified?.includes(channel?._id)){
                console.log('idenifeid')
                next()
            }else{
                console.log('NOT idenifeid')
                res.redirect(`/q/start/${channel?.quizId}`)
            }
        }
        else{
            res.redirect('/a/login')
        }
    }catch(err){
        console.log(err)
        res.redirect('/')
    }
}

export default authenticated