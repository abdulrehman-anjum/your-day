import { Response, Request } from "express";
import { emptyAnswersArray } from "../../quiz/services/emptyAnswersArray"

const logout = async (req: Request, res: Response)=>{
    emptyAnswersArray()
    res.clearCookie("username")
    if (req.cookies.admincookie){
        res.clearCookie("admincookie")
    }
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