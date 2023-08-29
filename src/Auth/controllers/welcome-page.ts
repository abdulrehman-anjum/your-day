import { Request, Response } from "express"
import { channel, setChannelVal } from "../../User/controllers/linkHandler"

export default function (req: Request, res:Response){

    if (channel){
        setChannelVal(false)
        res.redirect(`/q/start/${channel?.quizId}`)
    } else {
        res.render('message-to-user', 
        {
            message: 
                `
                    Welcome ${req.body.username}
                `,
            btnHref: "/",
            btnText: "Main Page"
        })
    }  
}