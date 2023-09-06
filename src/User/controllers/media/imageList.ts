import { Request, Response }    from 'express'
import Image from '../../models/image'
import { currentUser } from '../../../Auth/middlewares/refreshThisUser'

export default async function (req: Request, res: Response){
    const images = await Image.find({uploader: currentUser?._id}).lean()
    res.render('image-list', {images: images})
}
