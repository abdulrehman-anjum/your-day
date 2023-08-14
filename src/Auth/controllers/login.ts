import { Response, Request, NextFunction } from "express";
import User from "../models/user";
import Session from "../models/sessions";
import createUser from "../utils/createUser";

const login = async (req: Request, res: Response, next: NextFunction)=>{

    //TEMP ADMIN
    if (req.body.username===process.env.AdminSecretKey){
        console.log(Number(process.env.AdminSecretKey)) //NaN //because i want no value
        res.cookie('admincookie', Number(process.env.AdminSecretKey)) //NaN
        res.render('message-to-user', {
            message: 
                `
                    Hello Admin
                `,
            btnHref: "/admin",
            btnText: "Do your Admin Things"
        })
    } else {
        
        const existingUser = await User.findOne({username: req.body.username})
        const user = !existingUser?await createUser(req.body.username):existingUser

        await Session.updateOne({browserId: req.cookies.b_id}, {loggedUser: user._id})
        
        next()
    }


}

export default login