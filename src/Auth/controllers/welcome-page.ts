import { Request, Response } from "express"

export default function (req: Request, res:Response){

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