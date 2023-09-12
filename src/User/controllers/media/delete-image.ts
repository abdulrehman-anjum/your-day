import {Request, Response} from 'express'
import Page from '../../../slide/models/page'
import Image from '../../models/image'
import { api_cloudinary } from '../../../utils/cloudinaryConfig'

const deleteImage = async (req: Request, res: Response) => {
    const pageId = req.params.pageId
    const slideId = req.params.slideId
    const imageId = req.params.imageId

    await Page.findOneAndUpdate({_id: pageId}, { $pull: {images: imageId}})

    const image = await Image.findOne({_id: imageId})
    const publicId: string = typeof image?.publicId === 'string'? image?.publicId : ""
    
    api_cloudinary.delete_resources([publicId? publicId : ""], { type: 'upload', resource_type: 'image' })
    .then(async result=>
        {
            if(result.deleted[publicId]==='deleted'){
                await Image.findByIdAndDelete(imageId)
            }
        }
    );
    res.redirect(`/u/slide/${slideId}/${pageId}/add-media`)
}

export default deleteImage