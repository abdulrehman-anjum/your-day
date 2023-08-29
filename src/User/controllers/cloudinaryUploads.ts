import {Request, Response} from 'express'

import { dataUri } from '../middlewares/multer'

import uploadImageToCloudinary from '../services/uploadImageToCloudinary'

const cloudinaryUploads = async (req: Request, res: Response)=>{

    if (req.files){
        const images = req.files
        for (const image of images as Express.Multer.File[]){
            const file = await dataUri(image)
            // fileContent is the 64bit buffer of image that we converted to string
            const fileContent: string = file?.content?.toString()?
                                    file?.content?.toString()
                                    : ""
            const {
                uploaded, //! this comma might be a problem later or not   
                // imageURL
            }
             = await uploadImageToCloudinary(fileContent)
            if (!uploaded){
                res.render('message-to-user', 
                    {
                        message: "Image Upload Failed",
                        btnText: "Try Again Later",
                        btnHref: `#`
                    }
                )
            }
        
        }
        try{
            res.redirect('/u/slide-list')
        }catch{}
    }
}

export default cloudinaryUploads