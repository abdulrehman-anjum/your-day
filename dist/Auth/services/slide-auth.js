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
const sessions_1 = __importDefault(require("../models/sessions"));
const refreshThisUser_1 = require("../middlewares/refreshThisUser");
const linkHandler_1 = require("../../User/controllers/channels/linkHandler");
const authenticated = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield sessions_1.default.findOne({ browserId: req.cookies.b_id });
    const loggedIn = (session === null || session === void 0 ? void 0 : session.loggedUser) ? true : false;
    const identified = refreshThisUser_1.currentUser === null || refreshThisUser_1.currentUser === void 0 ? void 0 : refreshThisUser_1.currentUser.authorized; //returns an array 
    try {
        if (loggedIn) {
            if (!linkHandler_1.channel) {
                res.redirect('/404');
            }
            else if (identified === null || identified === void 0 ? void 0 : identified.includes(linkHandler_1.channel === null || linkHandler_1.channel === void 0 ? void 0 : linkHandler_1.channel._id)) {
                console.log('idenifeid');
                next();
            }
            else {
                console.log('NOT idenifeid');
                res.redirect('q/start/');
            }
        }
        else {
            res.redirect('/a/login');
        }
    }
    catch (err) {
        console.log(err);
        res.redirect('/');
    }
});
exports.default = authenticated;
//# sourceMappingURL=slide-auth.js.map