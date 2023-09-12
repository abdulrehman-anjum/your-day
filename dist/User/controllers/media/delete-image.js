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
const page_1 = __importDefault(require("../../../slide/models/page"));
const image_1 = __importDefault(require("../../models/image"));
const cloudinaryConfig_1 = require("../../../utils/cloudinaryConfig");
const deleteImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pageId = req.params.pageId;
    const slideId = req.params.slideId;
    const imageId = req.params.imageId;
    yield page_1.default.findOneAndUpdate({ _id: pageId }, { $pull: { images: imageId } });
    const image = yield image_1.default.findOne({ _id: imageId });
    const publicId = typeof (image === null || image === void 0 ? void 0 : image.publicId) === 'string' ? image === null || image === void 0 ? void 0 : image.publicId : "";
    cloudinaryConfig_1.api_cloudinary.delete_resources([publicId ? publicId : ""], { type: 'upload', resource_type: 'image' })
        .then((result) => __awaiter(void 0, void 0, void 0, function* () {
        if (result.deleted[publicId] === 'deleted') {
            yield image_1.default.findByIdAndDelete(imageId);
        }
    }));
    res.redirect(`/u/slide/${slideId}/${pageId}/add-media`);
});
exports.default = deleteImage;
//# sourceMappingURL=delete-image.js.map