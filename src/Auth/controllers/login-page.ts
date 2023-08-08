import { Response, Request } from "express";
import { setRestoreValue } from "../services/cookie-authed";

const loginPage = async (req: Request, res: Response)=>{
    setRestoreValue(true)
    res.redirect('/')
}

export default loginPage