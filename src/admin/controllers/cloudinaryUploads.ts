import {Request, Response} from 'express'

import { dataUri} from '../middlewares/multer'
import { uploader } from '../../utils/cloudinaryConfig'

const cloudinaryUploads = async (req: Request, res: Response)=>{

    if (req.file){
        const file = await dataUri(req.file)
        const cont: string = file?.content?.toString()? file?.content?.toString(): ""
        console.log(cont, "this the file2480")

        try {
            await uploader.uploader.upload(cont).then(result => {
                const image = result.url;
                console.log(image);
                res.send(`
                    image uploaded: <a href='${image}'>see here<a>
                    <br>
                    <img src='${image}'>
                `);
            });
        } catch (error) {
            console.error("Error uploading image:", error);
            res.status(500).send("Image upload failed");
        }
    }
}

export default cloudinaryUploads