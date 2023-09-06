import { Response, Request }  from "express";
import createUser                           from "../utils/createUser";
import Session                              from "../models/sessions";
import User                                 from "../models/user";
import { comparePasswords } from "../utils/bcryptConfig";

export let tryAgain: boolean = false;export function setTryAgain(val: boolean){tryAgain = val}

export default async function (req: Request, res: Response){
    const existingUser = await User.findOne({username: req.body.username})
    const user = !existingUser?await createUser(req.body.username, req.body.password):existingUser

    if (await comparePasswords(req.body.password , user.password)){
        await Session.updateOne({browserId: req.cookies.b_id}, {loggedUser: user._id}) //logs in
    } else {
        setTryAgain(true)
        res.redirect('/a/login')
    }
    res.redirect('/')
}
