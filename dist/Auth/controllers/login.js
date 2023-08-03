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
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.send(`User ${req.body.username} Save`)
    res.cookie("username", req.body.username);
    res.render('message-to-user', {
        message: `
                    Welcome ${req.body.username}
                `,
        btnHref: "/quiz",
        btnText: "Prove Your Identity"
    });
});
exports.default = login;
//# sourceMappingURL=login.js.map