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
const refreshThisUser_1 = require("../../../Auth/middlewares/refreshThisUser");
const page_1 = __importDefault(require("../../../slide/models/page"));
const slide_1 = __importDefault(require("../../../slide/models/slide"));
const addSlidePage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pageName = req.body.pageName;
    const page = {
        page_name: pageName,
        page_creator: refreshThisUser_1.currentUser._id
    };
    console.log(page);
    const newPage = new page_1.default(page);
    const p = yield newPage.save();
    const pageId = p._id;
    yield slide_1.default.updateOne({ _id: req.params.slideId }, { $push: { pages: pageId } });
    res.redirect(`/u/slide/${req.params.slideId}`);
});
exports.default = addSlidePage;
//# sourceMappingURL=addSlidePage.js.map