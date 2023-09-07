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
exports.setTryAgain = exports.tryAgain = void 0;
const createUser_1 = __importDefault(require("../utils/createUser"));
const sessions_1 = __importDefault(require("../models/sessions"));
const user_1 = __importDefault(require("../models/user"));
const bcryptConfig_1 = require("../utils/bcryptConfig");
const linkHandler_1 = require("../../User/controllers/channels/linkHandler");
exports.tryAgain = false;
function setTryAgain(val) { exports.tryAgain = val; }
exports.setTryAgain = setTryAgain;
function default_1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingUser = yield user_1.default.findOne({ username: req.body.username });
        const user = !existingUser ? yield (0, createUser_1.default)(req.body.username, req.body.password) : existingUser;
        if (yield (0, bcryptConfig_1.comparePasswords)(req.body.password, user.password)) {
            yield sessions_1.default.updateOne({ browserId: req.cookies.b_id }, { loggedUser: user._id }); //logs in
        }
        else {
            setTryAgain(true);
            res.redirect('/a/login');
        }
        if (linkHandler_1.channel) {
            res.redirect(`/q/start/${linkHandler_1.channel === null || linkHandler_1.channel === void 0 ? void 0 : linkHandler_1.channel.quizId}`);
        }
        else {
            res.redirect('/');
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=login.js.map