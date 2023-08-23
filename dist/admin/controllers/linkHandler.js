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
const channel_1 = __importDefault(require("../models/channel"));
function default_1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const channelName = req.params.channelName;
        console.log(channelName);
        const channel = yield channel_1.default.findOne({ channelName: channelName });
        if (channel) {
            yield channel_1.default.findOneAndUpdate({ _id: channel._id }, { $inc: { expirePoints: -1 } });
        }
        console.log(channel);
        let expiryPoint = (channel === null || channel === void 0 ? void 0 : channel.expirePoints) ? channel === null || channel === void 0 ? void 0 : channel.expirePoints : 0;
        if (expiryPoint <= 0) {
            res.render('message-to-user', { message: "link expired", btnText: 'main-page', btnHref: "/" });
        }
        else {
            console.log('answer the quiz');
            res.redirect(`/quiz/start/${channel === null || channel === void 0 ? void 0 : channel.quizId}`);
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=linkHandler.js.map