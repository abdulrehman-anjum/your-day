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
const sameUsernameChecker_1 = require("../../middlewares/sameUsernameChecker");
const channel_1 = __importDefault(require("../../models/channel"));
const lodash_1 = __importDefault(require("lodash"));
const refreshThisUser_1 = require("../../../Auth/middlewares/refreshThisUser");
function default_1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newChannel = new channel_1.default({
            channel_creator: refreshThisUser_1.currentUser._id,
            channelName: `${lodash_1.default.kebabCase(`${req.body.channelName} by ${refreshThisUser_1.currentUser.username}`)}`, quizId: req.body.quizId, slideId: req.body.slideId
        });
        yield newChannel.save();
        (0, sameUsernameChecker_1.setChannelCreation)(false);
        (0, sameUsernameChecker_1.setChannelName)("");
        res.redirect('/u');
    });
}
exports.default = default_1;
//# sourceMappingURL=createChannel.js.map