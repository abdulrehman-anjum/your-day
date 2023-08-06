import { Response, Request } from "express";
import User from "../models/user";

const login = async (req: Request, res: Response)=>{

    //TEMP ADMIN
    if (req.body.username===process.env.AdminSecretKey){
        console.log(Number(process.env.AdminSecretKey))
        res.cookie('admincookie', Number(process.env.AdminSecretKey))
        res.render('message-to-user', {
            message: 
                `
                    Hello Admin
                `,
            btnHref: "/admin",
            btnText: "Do your Admin Things"
        })
    } else {
        // res.send(`User ${req.body.username} Save`)
        res.cookie("username", req.body.username, {
            // maxAge: 5000,
            secure: true,
            httpOnly: true,
            sameSite: 'lax'
        })
        res.cookie("loggedOut", false, {
            // maxAge: 5000,
            secure: true,
            httpOnly: true,
            sameSite: 'lax'
        })
        const user = {
            username: req.body.username,
            type: "", //determine by whether the user visited with a personal_id that exist in our db in the url already, 
                        //then its a taker, otherwise giver
                        //know this how???? find a way
        }
        const newUser = new User(user)
        const userCookieName = req.body.username
        res.render('message-to-user', 
            {
                message: 
                    `
                        Welcome ${userCookieName}
                    `,
                btnHref: "/quiz",
                btnText: "Prove Your Identity"
            })

    }


}

export default login