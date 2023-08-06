import { Request, Response, NextFunction } from "express";


export default function(req: Request, res: Response, next: NextFunction){
    res.clearCookie
    res.cookie("loggedOut", true)
    next()
}