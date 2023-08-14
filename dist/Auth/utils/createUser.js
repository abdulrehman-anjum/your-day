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
const randomStringGenerator_1 = __importDefault(require("./randomStringGenerator"));
function createUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const p_id = (0, randomStringGenerator_1.default)(20);
        const userdata = {
            username: username,
            type: "reciever",
            personal_id: p_id
        };
        const newUser = new user_1.default(userdata);
        const user = yield newUser.save();
        return user;
    });
}
exports.default = createUser;
//# sourceMappingURL=createUser.js.map