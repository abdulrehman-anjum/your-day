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
exports.thisUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const randomStringGenerator_1 = __importDefault(require("../utils/randomStringGenerator"));
const sessions_1 = __importDefault(require("../models/sessions"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //TEMP ADMIN
    if (req.body.username === process.env.AdminSecretKey) {
        console.log(Number(process.env.AdminSecretKey));
        res.cookie('admincookie', Number(process.env.AdminSecretKey));
        res.render('message-to-user', {
            message: `
                    Hello Admin
                `,
            btnHref: "/admin",
            btnText: "Do your Admin Things"
        });
    }
    else {
        // res.send(`User ${req.body.username} Save`)
        // res.cookie("username", req.body.username, {
        //     // maxAge: 5000,
        //     secure: true,
        //     httpOnly: true,
        //     sameSite: 'lax'
        // })
        // res.cookie("loggedOut", false, {
        //     // maxAge: 5000,
        //     secure: true,
        //     httpOnly: true,
        //     sameSite: 'lax'
        // })
        // console.log(generateUniqueString(20))
        // const b_id = "browserId"
        // console.log("this sesson with B-id", browserId, b_id)
        // const existingUser = await User.findOne({sessions: { $in: [b_id]}}).lean()
        const username = req.body.username;
        const b_id = req.cookies.b_id;
        const existingUser = yield user_1.default.findOne({ username: username }).lean();
        console.log("Existing user", existingUser);
        if (existingUser) {
            console.log("logged in ");
            exports.thisUser = existingUser;
            console.log("LoginStatus True", exports.thisUser);
        }
        else {
            yield createUser();
        }
        console.log(exports.thisUser);
        yield sessions_1.default.updateOne({ browserId: b_id }, { loggedUser: exports.thisUser._id });
        function createUser() {
            return __awaiter(this, void 0, void 0, function* () {
                const p_id = (0, randomStringGenerator_1.default)(20);
                const user = {
                    username: username,
                    type: "reciever",
                    //then its a reciever, otherwise giver
                    //know this how???? find a way
                    personal_id: p_id,
                };
                const newUser = new user_1.default(user);
                exports.thisUser = yield newUser.save();
                console.log("new user SAVED", exports.thisUser);
            });
        }
        const userCookieName = req.body.username;
        res.render('message-to-user', {
            message: `
                        Welcome ${userCookieName}
                    `,
            btnHref: "/quiz",
            btnText: "Prove Your Identity"
        });
    }
});
exports.default = login;
//# sourceMappingURL=login.js.map