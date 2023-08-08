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
exports.setRestoreValue = exports.restore = void 0;
const user_1 = __importDefault(require("../models/user"));
function setRestoreValue(newValue) {
    return __awaiter(this, void 0, void 0, function* () {
        exports.restore = newValue;
    });
}
exports.setRestoreValue = setRestoreValue;
const authenticated = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const clientHasCookies = req.cookies.username;
    const loggedOut = req.cookies.loggedOut;
    const user = yield user_1.default.find({ personal_id: req.cookies.personal_id });
    console.log(user);
    console.log(clientHasCookies, "does he have buiskits", loggedOut);
    // if (clientHasCookies && loggedOut==="false"){
    if (false) {
        console.log('this????');
        next();
    }
    else {
        console.log('else auth no cookie');
        exports.restore = true;
        res.redirect('/');
    }
});
exports.default = authenticated;
//# sourceMappingURL=cookie-authed.js.map