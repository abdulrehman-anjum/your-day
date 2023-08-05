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
        res.cookie("username", req.body.username);
        const user = {
            username: req.body.username,
            type: "", //etermine by whether the user visited with a personal_id that exist in our db in the url already, 
            //then its a taker, otherwise giver
            //know this how???? find a way
        };
        const newUser = new user_1.default(user);
        res.render('message-to-user', {
            message: `
                        Welcome ${req.body.username}
                    `,
            btnHref: "/quiz",
            btnText: "Prove Your Identity"
        });
    }
});
exports.default = login;
//# sourceMappingURL=login.js.map