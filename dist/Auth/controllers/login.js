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
const user_1 = __importDefault(require("../models/user"));
const sessions_1 = __importDefault(require("../models/sessions"));
const createUser_1 = __importDefault(require("../utils/createUser"));
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //TEMP ADMIN
    if (req.body.username === process.env.AdminSecretKey) {
        console.log(Number(process.env.AdminSecretKey)); //NaN //because i want no value
        res.cookie('admincookie', Number(process.env.AdminSecretKey)); //NaN
        res.render('message-to-user', {
            message: `
                    Hello Admin
                `,
            btnHref: "/admin",
            btnText: "Do your Admin Things"
        });
    }
    else {
        const existingUser = yield user_1.default.findOne({ username: req.body.username });
        const user = !existingUser ? yield (0, createUser_1.default)(req.body.username) : existingUser;
        yield sessions_1.default.updateOne({ browserId: req.cookies.b_id }, { loggedUser: user._id });
        next();
    }
});
exports.default = login;
//# sourceMappingURL=login.js.map