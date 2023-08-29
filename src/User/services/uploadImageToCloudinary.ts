import { uploader } from '../../utils/cloudinaryConfig'
import Image from '../models/image'
import { currentUser } from '../../Auth/middlewares/refreshThisUser'
import { Types } from 'mongoose'

let uploaded: boolean = false 
let imageURL: string = ""
let imageId: Types.ObjectId

export default async function uploadImageToCloudinary(fileContent:string) {
    try {
        await uploader
                .uploader
                    .upload(fileContent)
                        .then(async result => 
                            {
                                // console.log("this result image", result)
                                imageURL = result.secure_url;
                                const newImg = new Image({url: imageURL, uploader: currentUser._id})
                                const savedImage = await newImg.save()
                                uploaded = true
                                imageId = savedImage._id
                            });
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