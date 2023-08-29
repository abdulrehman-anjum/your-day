import { Response, Request }    from "express";
import    setHomepageMode       from "../utils/setHomepageMode";

export default async function (req: Request, res: Response){
    await setHomepageMode(true)
    res.redirect('/')
}