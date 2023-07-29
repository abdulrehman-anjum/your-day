import {Request, Response} from 'express'

const uploadImagePage = async (req: Request, res: Response)=>{
    res.render('upload-image')
}

export default uploadImagePage