import { uploader } from '../../utils/cloudinaryConfig'
import Image from '../models/image'
import { currentUser } from '../../Auth/middlewares/refreshThisUser'
import { Types } from 'mongoose'

let uploaded: boolean = false 
let imageURL: string = ""
let imageId: Types.ObjectId

export default async function uploadImageToCloudinary(fileContent:string) {
    try {
        await uploader.uploader
        .upload(fileContent, {"width": 700})
        .then(async result =>
            {
                const newImg = new Image(
                    {
                        url: result.secure_url, 
                        publicId:  result.public_id, 
                        uploader: currentUser._id
                    }
                )
                const savedImage = await newImg.save()

                uploaded = true
                imageId = savedImage._id
            }
        )
    } catch (error) {
        console.error("Error uploading image:", error);
        uploaded = false      
    }

    return {
        uploaded: uploaded,
        imageURL: imageURL,
        imageId: imageId
    }
}