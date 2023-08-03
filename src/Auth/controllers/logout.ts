import { Response, Request } from "express";

const logout = async (req: Request, res: Response)=>{
    res.clearCookie("username")
    res.render('message-to-user', 
        {
            message: 
                `
                    Bye... LOGGED OUT SUCCESSFULLY 
                `,
            btnHref: "/auth/login",
            btnText: "Login Again"
        })

}

export default logout