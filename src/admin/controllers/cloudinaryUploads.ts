import {Request, Response} from 'express'

import { dataUri } from '../middlewares/multer'

import uploadImageToCloudinary from '../services/uploadImageToCloudinary'

const cloudinaryUploads = async (req: Request, res: Response)=>{

    if (req.file){

        const file = await dataUri(req.file)
        // fileContent is the 64bit buffer of image that we converted to string
        const fileContent: string = file?.content?.toString()?
                                    file?.content?.toString()
                                    : ""
        
        //upload file
        const {uploaded, imageURL} = await uploadImageToCloudinary(fileContent)
        
        if (uploaded){
            res.render('message-to-user', 
                {
                    message: "image uploaded",
                    btnText: "See uploaded Image here",
                    btnHref: `${imageURL}`
                }
            )
        } else {
            res.render('message-to-user', 
                {
                    message: "Image Upload Failed",
                    btnText: "Try Again",
                    btnHref: `/admin/upload-image`
                }
            )
        }

    }
}

export default cloudinaryUploads