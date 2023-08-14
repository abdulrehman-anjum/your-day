import { Request, Response } from "express"

export default function(req: Request, res: Response){
    res.render('message-to-user', 
        {
            message: 
                `
                    Bye... LOGGED OUT SUCCESSFULLY 
                `,
            btnHref: "/auth/login",
            btnText: "Login Again"
        }
    )
}