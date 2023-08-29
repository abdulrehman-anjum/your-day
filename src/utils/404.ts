import { Request, Response } from "express"

export default function (req: Request, res:Response){
    res.render(
        'message-to-user', 
        {
            message: "404 Page Not Found", 
            btnText: "Main Page", 
            btnHref: "/"
        }
    )
}