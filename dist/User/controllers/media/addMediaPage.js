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
const slide_1 = __importDefault(require("../../../slide/models/slide"));
const addMediaPage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const slideId = req.params.slideId;
        const slide = yield slide_1.default.findOne({ _id: slideId }).populate('pages');
        const pageId = req.params.pageId;
        const page = yield page_1.default.findOne({ _id: pageId }).populate('images');
        const pageImages = page === null || page === void 0 ? void 0 : page.images;
        console.log(pageImages);
        let images;
        if ((pageImages === null || pageImages === void 0 ? void 0 : pageImages.length) != undefined ? (pageImages === null || pageImages === void 0 ? void 0 : pageImages.length) > 1 : false) {
            images = pageImages;
        }
        else {
            if ((pageImages === null || pageImages === void 0 ? void 0 : pageImages.length) != undefined ? (pageImages === null || pageImages === void 0 ? void 0 : pageImages.length) > 0 : false) {
                const url = pageImages && pageImages[0] !== undefined ? pageImages[0] : "";
                images = [
                    {
                        id: url._id,
                        url: url.url
                    },
                    {
                        url: "/images/default-image.png"
                    }
                ];
            }
            else if ((pageImages === null || pageImages === void 0 ? void 0 : pageImages.length) != undefined ? (pageImages === null || pageImages === void 0 ? void 0 : pageImages.length) == 0 : false) {
                images = [
                    {
                        url: "/images/default-image.png"
                    },
                    {
                        url: "/images/default-image.png"
                    }
                ];
            }
        }
        res.render('add-media-slide-page', { pageId: pageId, images: images, slide: slide, });
    }
    catch (err) {
        console.error(err);
        res.redirect('/page404');
    }
});
exports.default = addMediaPage;
//# sourceMappingURL=addMediaPage.js.map