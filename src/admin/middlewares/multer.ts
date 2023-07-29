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

const dataUri = async (reqfile: any) =>{
    if (reqfile){
        console.log(reqfile, 'multer.js')
        await dUri.format(path.extname(reqfile.originalname).toString(), reqfile.buffer)
    }
}



export {multerUploads, dataUri}