import { Request, Response } from "express";
import { currentUser } from "../../Auth/middlewares/refreshThisUser";
import setHomepageMode from "../../Auth/utils/setHomepageMode";
import { mode } from "../../Auth/utils/setHomepageMode";
import { setTryAgain, tryAgain } from "../../Auth/controllers/login";
import User from "../../Auth/models/user";

export default async function (req: Request, res: Response){
    const user = await User.findOne({_id: currentUser?._id}).populate("authorized")
    const authC = user?.authorized
    const originalMode = mode
    let errMsg: string = ""
    setHomepageMode(false)
    if (tryAgain){
        errMsg = "Try Again"
        setTryAgain(false)
    }
    res.render('index', {
        mode: originalMode?"login":"homepage", 
        user: currentUser,
        authorizedChannels: authC,
        errMsg: errMsg
    })
}