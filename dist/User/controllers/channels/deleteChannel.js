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
const channel_1 = __importDefault(require("../../../User/models/channel"));
const user_1 = __importDefault(require("../../../Auth/models/user"));
const refreshThisUser_1 = require("../../../Auth/middlewares/refreshThisUser");
function default_1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const channel = yield channel_1.default.findById(id);
        yield user_1.default.findOneAndUpdate({ _id: refreshThisUser_1.currentUser._id }, { $pull: { authorized: channel === null || channel === void 0 ? void 0 : channel._id } });
        yield channel_1.default.findByIdAndDelete(id);
        res.redirect('/u/channel-list');
    });
}
exports.default = default_1;
//# sourceMappingURL=deleteChannel.js.map