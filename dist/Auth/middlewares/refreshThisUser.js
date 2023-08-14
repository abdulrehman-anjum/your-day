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
exports.currentUser = void 0;
const sessions_1 = __importDefault(require("../models/sessions"));
const user_1 = __importDefault(require("../models/user"));
function default_1(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = yield sessions_1.default.findOne({ browserId: req.cookies.b_id });
        exports.currentUser = yield user_1.default.findOne({ _id: session === null || session === void 0 ? void 0 : session.loggedUser });
        next();
    });
}
exports.default = default_1;
//# sourceMappingURL=refreshThisUser.js.map