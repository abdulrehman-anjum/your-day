import { Request, Response } from "express"

export default function(req: Request, res: Response){
    res.render('message-to-user', 
        {
            message:'Logged Out',
            btnHref: "/a/login",
            btnText: "Login Again"
        }
    )
}