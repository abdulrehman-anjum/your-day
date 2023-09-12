"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataUri = exports.multerUploads = void 0;
const multer_1 = __importDefault(require("multer"));
const parser_1 = __importDefault(require("datauri/parser"));
const path_1 = __importDefault(require("path"));
// allow image only 
const storage = multer_1.default.memoryStorage();
const multerUploads = (0, multer_1.default)({
    storage: storage,
    limits: { fileSize: 1024 * 1024 }, //1MB
}).single("image");
exports.multerUploads = multerUploads;
// const multerUploads = multer({storage}).single('image')
const dUri = new parser_1.default();
//JSDoc
/**
* @description This function converts the buffer to data url
* @param {Object} req containing the field object
* @returns {String} The data url from the string buffer
*/
//function that convert buffer to image path
const dataUri = (reqfile) => {
    if (reqfile) {
        console.log(reqfile, 'multer.js');
        const imagestring = dUri.format(path_1.default.extname(reqfile.originalname).toString(), reqfile.buffer);
        return imagestring;
    }
};
exports.dataUri = dataUri;
//# sourceMappingURL=multer.js.map