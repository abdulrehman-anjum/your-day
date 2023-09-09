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
const multer_1 = require("../../middlewares/multer");
const uploadImageToCloudinary_1 = __importDefault(require("../../services/uploadImageToCloudinary"));
const page_1 = __importDefault(require("../../../slide/models/page"));
const addSlidePage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pageId = req.params.pageId;
    const slideId = req.params.slideId;
    const images = req.files;
    if (images) {
        let uploadedCounter = 0;
        for (const image of images) {
            const file = yield (0, multer_1.dataUri)(image);
            const imageString = (file === null || file === void 0 ? void 0 : file.content) ? file === null || file === void 0 ? void 0 : file.content : "";
            const { uploaded, imageId } = yield (0, uploadImageToCloudinary_1.default)(imageString);
            if (!uploaded) { ///failed
                res.render('message-to-user', {
                    message: "Image Upload Failed",
                    btnText: "Please, Try Again",
                    btnHref: `/u/slide/${slideId}/${pageId}/add-media`
                });
                //*also in the future either show which image failed to upload or delete the uploaded image from cloudinary
            }
            else { //success
                uploadedCounter = uploadedCounter + 1;
                yield page_1.default.updateOne({ _id: pageId }, { $push: { images: imageId } });
                if (uploadedCounter === images.length) {
                    console.log(uploadedCounter, images.length);
                    res.redirect(`/u/slide/${slideId}/${pageId}/add-media`);
                }
            }
        }
    }
});
exports.default = addSlidePage;
//# sourceMappingURL=addMedia.js.map