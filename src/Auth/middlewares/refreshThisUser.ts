export let currentUser: any

import { Request, Response, NextFunction } from "express";
import Session from "../models/sessions";
import User from "../models/user";

export default async function(req: Request, res: Response, next: NextFunction){
    const session = await Session.findOne({browserId: req.cookies.b_id})
    currentUser = await User.findOne({_id: session?.loggedUser})
    next()
}