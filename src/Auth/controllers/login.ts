import { Response, Request } from "express";
import User from "../models/user";

const login = async (req: Request, res: Response)=>{
    // res.send(`User ${req.body.username} Save`)
    res.cookie("username", req.body.username)
    const user = {
        username: req.body.username,
        type: "", //etermine by whether the user visited with a personal_id that exist in our db in the url already, 
                    //then its a taker, otherwise giver
                    //know this how???? find a way
    }
    const newUser = new User(user)
    res.render('message-to-user', 
        {
            message: 
                `
                    Welcome ${req.body.username}
                `,
            btnHref: "/quiz",
            btnText: "Prove Your Identity"
        })

}

export default login