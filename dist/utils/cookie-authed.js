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
exports.setRestoreValue = exports.restore = void 0;
const app_1 = require("../app");
function setRestoreValue(newValue) {
    return __awaiter(this, void 0, void 0, function* () {
        exports.restore = newValue;
    });
}
exports.setRestoreValue = setRestoreValue;
const authenticated = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //! check whter the client has our cookie and if he does then next() or otherwise go to authentication page
    //! and set a cookie as auth
    const clientHasCookies = false; //new user
    if (clientHasCookies) {
        console.log('this????');
        next();
    }
    else {
        console.log('else auth no cookie');
        yield (0, app_1.setMode)('login');
        console.log(app_1.mode, "actual mode");
        res.redirect('/');
        exports.restore = true;
    }
});
exports.default = authenticated;
//# sourceMappingURL=cookie-authed.js.map