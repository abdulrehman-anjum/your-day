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
exports.setChannelVal = exports.channel = void 0;
const channel_1 = __importDefault(require("../../models/channel"));
const refreshThisUser_1 = require("../../../Auth/middlewares/refreshThisUser");
function setChannelVal(val) {
    exports.channel = val;
}
exports.setChannelVal = setChannelVal;
function default_1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const channelName = req.params.channelName;
        exports.channel = yield channel_1.default.findOne({ channelName: channelName });
        let expiryPoint = (exports.channel === null || exports.channel === void 0 ? void 0 : exports.channel.expirePoints) ? exports.channel === null || exports.channel === void 0 ? void 0 : exports.channel.expirePoints : 0;
        console.log(expiryPoint, "expirr");
        if (expiryPoint > 0) {
            if (refreshThisUser_1.currentUser === null || refreshThisUser_1.currentUser === void 0 ? void 0 : refreshThisUser_1.currentUser.authorized.includes(exports.channel._id)) {
                res.redirect(`/s/start/${exports.channel.slideId}`);
            }
            else {
                // if (channel){
                //     await Channel.findOneAndUpdate({_id: channel._id}, {$inc: {expirePoints: -1}})
                // }
                res.redirect(`/q/start/${exports.channel === null || exports.channel === void 0 ? void 0 : exports.channel.quizId}`);
            }
        }
        else {
            res.render('message-to-user', {
                message: "Sorry, This link has been expired. You can ask the sender to send you the link again.",
                btnText: 'Go to homepage', btnHref: "/"
            });
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=linkHandler.js.map