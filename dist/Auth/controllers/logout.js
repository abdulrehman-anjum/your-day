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
const emptyAnswersArray_1 = require("../../quiz/services/emptyAnswersArray");
const sessions_1 = __importDefault(require("../models/sessions"));
function default_1(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        (0, emptyAnswersArray_1.emptyAnswersArray)();
        const session = yield sessions_1.default.findOne({ browserId: req.cookies.b_id });
        const loggedInUser = session === null || session === void 0 ? void 0 : session.loggedUser;
        if (loggedInUser) {
            yield sessions_1.default
                .updateOne({ browserId: req.cookies.b_id }, { $unset: { loggedUser: 1 } });
            next();
        }
        else {
            res.redirect('/a/login');
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=logout.js.map