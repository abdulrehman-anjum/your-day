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
const setHomepageMode_1 = __importDefault(require("../utils/setHomepageMode"));
const authenticated = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield sessions_1.default.findOne({ browserId: req.cookies.b_id });
    const loggedIn = (session === null || session === void 0 ? void 0 : session.loggedUser) ? true : false;
    if (loggedIn) {
        next();
    }
    else {
        (0, setHomepageMode_1.default)(true);
        res.redirect('/');
    }
});
exports.default = authenticated;
//# sourceMappingURL=authenticator.js.map