import {Request, Response} from 'express'
import { dataUri } from '../../middlewares/multer'
import uploadImageToCloudinary from '../../services/uploadImageToCloudinary'
import Page from '../../../slide/models/page'

const addSlidePage = async (req: Request, res: Response) => {
    
    const pageId = req.params.pageId
    const slideId = req.params.slideId
    const image = req.file

    if (image){
        if (image.mimetype.startsWith('image/')) { //file type error handling
            if (image.size>1024*1024){ //size limit error handling
                res.render('message-to-user', 
                    {
                        message: "Image size must be 1MB or less, Please use another image or resize this image.",
                        btnText: "Try Again",
                        btnHref: `/u/slide/${slideId}/${pageId}/add-media`
                    }
                )
            } else { // uploading 1 mb or less image
                try{
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
                    } else { //success
                        const thisPage = await Page.findOne({_id: pageId})
                        if (thisPage && thisPage['images'].length !==2){
                            await Page.updateOne({_id: pageId}, { $push: {images: imageId}})
                            res.redirect(`/u/slide/${slideId}/${pageId}/add-media`)
                        } else {
                            res.render('message-to-user', 
                            {
                                message: "Cant upload more than two images",
                                btnText: "Delet one of the image or both images and try again",
                                btnHref: `/u/slide/${slideId}/${pageId}/add-media`
                            }
                        )
                        }
                        
                    }
                }catch(err){
                    console.log(err)
                }
            }
        } else {
            res.render('message-to-user', 
            {
                message: "Only Images are Allowed",
                btnText: "Please, Try Again",
                btnHref: `/u/slide/${slideId}/${pageId}/add-media`
            }
        )
        }
        
    }
}

export default addSlidePage