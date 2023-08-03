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
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = require("../middlewares/multer");
const cloudinaryConfig_1 = require("../../utils/cloudinaryConfig");
const cloudinaryUploads = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (req.file) {
        const file = yield (0, multer_1.dataUri)(req.file);
        const cont = ((_a = file === null || file === void 0 ? void 0 : file.content) === null || _a === void 0 ? void 0 : _a.toString()) ? (_b = file === null || file === void 0 ? void 0 : file.content) === null || _b === void 0 ? void 0 : _b.toString() : "";
        console.log(cont, "this the file2480");
        try {
            yield cloudinaryConfig_1.uploader.uploader.upload(cont).then(result => {
                const image = result.url;
                console.log(image);
                res.send(`
                    image uploaded: <a href='${image}'>see here<a>
                    <br>
                    <img src='${image}'>
                `);
            });
        }
        catch (error) {
            console.error("Error uploading image:", error);
            res.status(500).send("Image upload failed");
        }
    }
});
exports.default = cloudinaryUploads;
//# sourceMappingURL=cloudinaryUploads.js.map