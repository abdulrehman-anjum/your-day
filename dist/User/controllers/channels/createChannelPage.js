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
const refreshThisUser_1 = require("../../../Auth/middlewares/refreshThisUser");
const quiz_1 = __importDefault(require("../../../quiz/models/quiz"));
const sameUsernameChecker_1 = require("../../middlewares/sameUsernameChecker");
const slide_1 = __importDefault(require("../../../slide/models/slide"));
function default_1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (sameUsernameChecker_1.channelCreation && sameUsernameChecker_1.channelName != "") {
            const quizzes = yield quiz_1.default.find({ quiz_creator: refreshThisUser_1.currentUser._id });
            const slides = yield slide_1.default.find({ slide_creator: refreshThisUser_1.currentUser._id });
            res.render('channel-select-quiz', { quizzes: quizzes, slides: slides, channelName: sameUsernameChecker_1.channelName });
        }
        else if (sameUsernameChecker_1.channelName != "" && !sameUsernameChecker_1.channelCreation) {
            res.render('create-channel', { message: "already exists, try another" });
        }
        else {
            res.render('create-channel', { message: "" });
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=createChannelPage.js.map