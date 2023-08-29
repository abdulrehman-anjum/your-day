"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinaryConfig_1 = require("../../utils/cloudinaryConfig");
const image_1 = __importDefault(require("../models/image"));
const refreshThisUser_1 = require("../../Auth/middlewares/refreshThisUser");
let uploaded = false;
let imageURL = "";
let imageId;
function uploadImageToCloudinary(fileContent) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield cloudinaryConfig_1.uploader
                .uploader
                .upload(fileContent)
                .then((result) => __awaiter(this, void 0, void 0, function* () {
                // console.log("this result image", result)
                imageURL = result.secure_url;
                const newImg = new image_1.default({ url: imageURL, uploader: refreshThisUser_1.currentUser._id });
                const savedImage = yield newImg.save();
                uploaded = true;
                imageId = savedImage._id;
            }));
        }
        catch (error) {
            console.error("Error uploading image:", error);
            uploaded = false;
        }
        return {
            uploaded: uploaded,
            imageURL: imageURL,
            imageId: imageId
        };
    });
}
exports.default = uploadImageToCloudinary;
//# sourceMappingURL=uploadImageToCloudinary.js.map