import { Request } from 'express';
import multer from 'multer'
import Datauri from 'datauri/parser'
import path from 'path'

const storage = multer.memoryStorage();
const multerUploads = multer({storage}).single('image')

const dUri = new Datauri();

/**
* @description This function converts the buffer to data url
* @param {Object} req containing the field object
* @returns {String} The data url from the string buffer
*/

//function that convert buffer to image path
const dataUri = (reqfile: any) =>{
    if (reqfile){
        console.log(reqfile, 'multer.js')
        const imagestring = dUri.format(path.extname(reqfile.originalname).toString(), reqfile.buffer)
        return imagestring
    }
}

export {multerUploads, dataUri}