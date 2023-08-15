import { Request, Response } from "express";
import { currentUser } from "../../Auth/middlewares/refreshThisUser";
import setHomepageMode from "../../Auth/utils/setHomepageMode";
import { mode } from "../../Auth/utils/setHomepageMode";

export default function (req: Request, res: Response){
    const originalMode = mode
    setHomepageMode(false)
    // console.log("index", currentUser)
    res.render('index', {mode: originalMode?"login":"homepage", user: currentUser})
}