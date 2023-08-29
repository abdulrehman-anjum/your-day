import {Request, Response} from 'express'
import { dataUri } from '../middlewares/multer'
import uploadImageToCloudinary from '../services/uploadImageToCloudinary'
import Page from '../../slide/models/page'

const addSlidePage = async (req: Request, res: Response) => {

    const pageId = req.params.pageId

    if (req.files){
        console.log(req.files)

        const images = req.files
        for (const image of images as Express.Multer.File[]){
            const file = await dataUri(image)
            const imageString: string = file?.content?file?.content:""
            const {uploaded, imageId} = await uploadImageToCloudinary(imageString)
            if (!uploaded){
                res.render('message-to-user', 
                    {
                        message: "Image Upload Failed",
                        btnText: "Try Again",
                        btnHref: `/u//slide/${pageId}/add-media`
                    }
                )
                //also in the future either show which image failed to upload or delete the uploaded image from cloudinary
                
            } else {
                console.log("the images url, two url", imageId)
                await Page.updateOne({_id: pageId}, { $push: {images: imageId}})
             
            }
        }

    }

   res.redirect(`/u//slide/${pageId}/add-media`)

}

export default addSlidePage