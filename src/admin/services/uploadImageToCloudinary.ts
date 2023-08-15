import { uploader } from '../../utils/cloudinaryConfig'
import Image from '../models/image'
import { currentUser } from '../../Auth/middlewares/refreshThisUser'

let uploaded: boolean = false 
let imageURL: string = ""

export default async function uploadImageToCloudinary(fileContent:string) {
    try {
        await uploader
                .uploader
                    .upload(fileContent)
                        .then(async result => 
                            {
                                imageURL = result.url;
                                const newImg = new Image({url: imageURL, uploader: currentUser._id})
                                await newImg.save()
                                uploaded = true
                            });
    } catch (error) {
        console.error("Error uploading image:", error);
        uploaded = false         
    }

    return {uploaded: uploaded, imageURL: imageURL}
}