import { Request, Response } from "express";
import { currentUser } from "../../Auth/middlewares/refreshThisUser";
import setHomepageMode from "../../Auth/utils/setHomepageMode";
import { mode } from "../../Auth/utils/setHomepageMode";
import { setTryAgain, tryAgain } from "../../Auth/controllers/login";

export default function (req: Request, res: Response){
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
        errMsg: errMsg
    })
}