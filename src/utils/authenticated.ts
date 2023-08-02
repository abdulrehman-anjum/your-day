import { Request, Response, NextFunction } from "express"
const authenticated = async (req: Request, res: Response, next: NextFunction)=>{
    //! check whter the client has our cookie and if he does then next() or otherwise go to authentication page
    //! and set a cookie as auth 
    res.send("yes")
    next()
}

export default authenticated