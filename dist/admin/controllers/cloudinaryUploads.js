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
const multer_1 = require("../middlewares/multer");
const cloudinaryConfig_1 = require("../../utils/cloudinaryConfig");
const image_1 = __importDefault(require("../models/image"));
const refreshThisUser_1 = require("../../Auth/middlewares/refreshThisUser");
const cloudinaryUploads = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (req.file) {
        const file = yield (0, multer_1.dataUri)(req.file);
        // fileContent is the 64bit buffer of image that we converted to string
        const fileContent = ((_a = file === null || file === void 0 ? void 0 : file.content) === null || _a === void 0 ? void 0 : _a.toString()) ? (_b = file === null || file === void 0 ? void 0 : file.content) === null || _b === void 0 ? void 0 : _b.toString() : "";
        try {
            yield cloudinaryConfig_1.uploader.uploader.upload(fileContent).then((result) => __awaiter(void 0, void 0, void 0, function* () {
                const imageURL = result.url;
                const imagedata = {
                    url: imageURL,
                    uploader: refreshThisUser_1.currentUser._id
                };
                const newImg = new image_1.default(imagedata);
                yield newImg.save();
                res.send(`
                    image uploaded: <a href='${imageURL}'>see here<a>
                    <br>
                    <img src='${imageURL}'>
                `);
            }));
        }
        catch (error) {
            console.error("Error uploading image:", error);
            res.status(500).send("Image upload failed");
        }
    }
});
exports.default = cloudinaryUploads;
//# sourceMappingURL=cloudinaryUploads.js.map