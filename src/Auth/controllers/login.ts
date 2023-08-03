import { Response, Request } from "express";

const login = async (req: Request, res: Response)=>{
    // res.send(`User ${req.body.username} Save`)
    res.cookie("username", req.body.username)
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