"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api_cloudinary = exports.uploader = exports.cloudinaryConfig = void 0;
const cloudinary_1 = __importDefault(require("cloudinary"));
const uploader = cloudinary_1.default.v2;
exports.uploader = uploader;
const api_cloudinary = uploader.api;
exports.api_cloudinary = api_cloudinary;
const config = uploader.config;
const cloudinaryConfig = (req, res, next) => {
    config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    next();
};
exports.cloudinaryConfig = cloudinaryConfig;
//# sourceMappingURL=cloudinaryConfig.js.map