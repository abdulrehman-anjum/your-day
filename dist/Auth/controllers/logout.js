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
const emptyAnswersArray_1 = require("../../quiz/services/emptyAnswersArray");
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, emptyAnswersArray_1.emptyAnswersArray)();
    res.clearCookie("username");
    res.cookie("loggedOut", true);
    if (req.cookies.admincookie) {
        res.clearCookie("admincookie");
    }
    res.render('message-to-user', {
        message: `
                    Bye... LOGGED OUT SUCCESSFULLY 
                `,
        btnHref: "/auth/login",
        btnText: "Login Again"
    });
});
exports.default = logout;
//# sourceMappingURL=logout.js.map