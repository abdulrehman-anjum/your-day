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
const slide_1 = __importDefault(require("../models/slide"));
const refreshThisUser_1 = require("../../Auth/middlewares/refreshThisUser");
const channel_1 = __importDefault(require("../../User/models/channel"));
function default_1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let identified = false;
            const channels = yield channel_1.default.find({ slideId: req.params.slideId }).lean();
            channels === null || channels === void 0 ? void 0 : channels.forEach((channel) => __awaiter(this, void 0, void 0, function* () {
                if (refreshThisUser_1.currentUser === null || refreshThisUser_1.currentUser === void 0 ? void 0 : refreshThisUser_1.currentUser.authorized.includes(channel._id)) {
                    identified = true;
                }
            }));
            if (identified) {
                const slide = yield slide_1.default.findOne({ _id: req.params.slideId }).populate("slide_creator")
                    .populate({ path: 'pages', populate: { path: 'image' } });
                res.render('slide', { slide: slide, currentUser: refreshThisUser_1.currentUser });
            }
            else {
                console.log("it was me all along...slide.ts muuhahahahahaaa");
                res.redirect('/page404');
            }
        }
        catch (err) {
            console.error(err);
            res.redirect('/page404');
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=slide.js.map