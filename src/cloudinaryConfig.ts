import cloudinary from 'cloudinary'
import { NextFunction, Request, Response } from 'express';

const uploader = cloudinary.v2
const config = uploader.config

const cloudinaryConfig = (req: Request, res: Response, next: NextFunction) => {
    config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    next()
}
export {cloudinaryConfig, uploader}