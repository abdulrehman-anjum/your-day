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
const randomStringGenerator_1 = __importDefault(require("../utils/randomStringGenerator"));
const sessions_1 = __importDefault(require("../models/sessions"));
function default_1(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const clientAlreadyHasB_Id = req.cookies.b_id ? true : false;
        console.log("clientAlreadyHasCookies", clientAlreadyHasB_Id);
        if (!clientAlreadyHasB_Id) {
            const b_id = (0, randomStringGenerator_1.default)(23);
            res.cookie('b_id', b_id, {
                maxAge: 2592000000,
                httpOnly: true,
                sameSite: 'lax'
            });
            const newSession = new sessions_1.default({ browserId: b_id });
            yield newSession.save();
        }
        next();
    });
}
exports.default = default_1;
//# sourceMappingURL=startSession.js.map