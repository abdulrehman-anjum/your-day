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
const refreshThisUser_1 = require("../../Auth/middlewares/refreshThisUser");
const setHomepageMode_1 = __importDefault(require("../../Auth/utils/setHomepageMode"));
const setHomepageMode_2 = require("../../Auth/utils/setHomepageMode");
const login_1 = require("../../Auth/controllers/login");
const user_1 = __importDefault(require("../../Auth/models/user"));
function default_1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield user_1.default.findOne({ _id: refreshThisUser_1.currentUser === null || refreshThisUser_1.currentUser === void 0 ? void 0 : refreshThisUser_1.currentUser._id }).populate("authorized");
        const authC = user === null || user === void 0 ? void 0 : user.authorized;
        const originalMode = setHomepageMode_2.mode;
        let errMsg = "";
        (0, setHomepageMode_1.default)(false);
        if (login_1.tryAgain) {
            errMsg = "Try Again";
            (0, login_1.setTryAgain)(false);
        }
        res.render('index', {
            mode: originalMode ? "login" : "homepage",
            user: refreshThisUser_1.currentUser,
            authorizedChannels: authC,
            errMsg: errMsg
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=home.js.map