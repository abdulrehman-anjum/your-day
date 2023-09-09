import {Request, Response} from 'express'
import { dataUri } from '../../middlewares/multer'
import uploadImageToCloudinary from '../../services/uploadImageToCloudinary'
import Page from '../../../slide/models/page'

const addSlidePage = async (req: Request, res: Response) => {

    const pageId = req.params.pageId
    const slideId = req.params.slideId
    const images = req.files
    if (images){

        let uploadedCounter: number = 0
        for (const image of images as Express.Multer.File[]){
            const file = await dataUri(image)
            const imageString: string = file?.content?file?.content:""
            const {uploaded, imageId} = await uploadImageToCloudinary(imageString)
            if (!uploaded){ ///failed
                res.render('message-to-user', 
                    {
                        message: "Image Upload Failed",
                        btnText: "Please, Try Again",
                        btnHref: `/u/slide/${slideId}/${pageId}/add-media`
                    }
                )
                //*also in the future either show which image failed to upload or delete the uploaded image from cloudinary
            } else { //success
                uploadedCounter = uploadedCounter+1
                await Page.updateOne({_id: pageId}, { $push: {images: imageId}})
                if(uploadedCounter === images.length) {
                    console.log(uploadedCounter, images.length)
                    res.redirect(`/u/slide/${slideId}/${pageId}/add-media`) 
                }
            }
        }
        


    }
}

export default addSlidePage