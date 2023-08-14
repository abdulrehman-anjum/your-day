import {Request, Response} from 'express'

import { dataUri } from '../middlewares/multer'
import { uploader } from '../../utils/cloudinaryConfig'

const cloudinaryUploads = async (req: Request, res: Response)=>{

    if (req.file){
        const file = await dataUri(req.file)
        // fileContent is the 64bit buffer of image that we converted to string
        const fileContent: string = file?.content?.toString()? file?.content?.toString(): ""
        try {
            await uploader.uploader.upload(fileContent).then(result => {
                const imageURL = result.url;
                res.send(`
                    image uploaded: <a href='${imageURL}'>see here<a>
                    <br>
                    <img src='${imageURL}'>
                `);
            });
        } catch (error) {
            console.error("Error uploading image:", error);
            res.status(500).send("Image upload failed");
        }
    }
}

export default cloudinaryUploads