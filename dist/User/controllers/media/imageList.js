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
const image_1 = __importDefault(require("../../models/image"));
const refreshThisUser_1 = require("../../../Auth/middlewares/refreshThisUser");
function default_1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const images = yield image_1.default.find({ uploader: refreshThisUser_1.currentUser === null || refreshThisUser_1.currentUser === void 0 ? void 0 : refreshThisUser_1.currentUser._id }).lean();
        res.render('image-list', { images: images });
    });
}
exports.default = default_1;
//# sourceMappingURL=imageList.js.map