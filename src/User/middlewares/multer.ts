import multer from 'multer'
import Datauri from 'datauri/parser'
import path from 'path'

// allow image only 

const storage = multer.memoryStorage();
const multerUploads = multer({
    storage: storage, 
    limits: { fileSize: 1024*1024 }, //1MB
}).single("image")
// const multerUploads = multer({storage}).single('image')

const dUri = new Datauri();

//JSDoc

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