"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const refreshThisUser_1 = require("../../Auth/middlewares/refreshThisUser");
const setHomepageMode_1 = __importDefault(require("../../Auth/utils/setHomepageMode"));
const setHomepageMode_2 = require("../../Auth/utils/setHomepageMode");
const login_1 = require("../../Auth/controllers/login");
function default_1(req, res) {
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
        errMsg: errMsg
    });
}
exports.default = default_1;
//# sourceMappingURL=home.js.map