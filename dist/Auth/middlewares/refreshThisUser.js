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
const login_1 = require("../controllers/login");
const sessions_1 = __importDefault(require("../models/sessions"));
const user_1 = __importDefault(require("../models/user"));
function default_1(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const b_id = req.cookies.b_id;
        const session = yield sessions_1.default.findOne({ browserId: b_id });
        console.log("sesssiooonn refreeshh", session);
        const username = session === null || session === void 0 ? void 0 : session.loggedUser;
        const newValueOfThisUser = yield user_1.default.findOne({ _id: username });
        (0, login_1.setThisUser)(newValueOfThisUser);
        console.log("refreshhhh", newValueOfThisUser);
        next();
    });
}
exports.default = default_1;
//# sourceMappingURL=refreshThisUser.js.map