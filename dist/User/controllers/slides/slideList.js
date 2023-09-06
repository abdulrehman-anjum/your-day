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
const slide_1 = __importDefault(require("../../../slide/models/slide"));
function default_1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const slideList = yield slide_1.default.find({ slide_creator: refreshThisUser_1.currentUser._id });
        res.render('slide-list', { slideList: slideList });
    });
}
exports.default = default_1;
//# sourceMappingURL=slideList.js.map