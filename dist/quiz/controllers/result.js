"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const getAnswer_1 = require("./getAnswer");
const calcResult_1 = __importStar(require("../services/calcResult"));
const emptyAnswersArray_1 = require("../services/emptyAnswersArray");
const user_1 = __importDefault(require("../../Auth/models/user"));
const refreshThisUser_1 = require("../../Auth/middlewares/refreshThisUser");
const questions_1 = require("../utils/questions");
const linkHandler_1 = require("../../User/controllers/channels/linkHandler");
const channel_1 = __importDefault(require("../../User/models/channel"));
const result = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userAnswers = JSON.parse(JSON.stringify(getAnswer_1.answers)); //copying array:bcs we want original array be empty
    const userQuestions = JSON.parse(JSON.stringify(questions_1.fetchedQuestions)); //copying array:bcs we want original array be empty
    console.log("iser amserrr", userAnswers);
    (0, emptyAnswersArray_1.emptyAnswersArray)();
    (0, questions_1.setQuizQuestions)([]);
    console.log("iser amserrr", userAnswers);
    yield (0, calcResult_1.default)(userAnswers, userQuestions); //complete calc result
    console.log("wrongCounter", calcResult_1.wrongCounter);
    if (calcResult_1.wrongCounter === 0) {
        console.log("channel from resultjs", linkHandler_1.channel);
        yield user_1.default.findByIdAndUpdate(refreshThisUser_1.currentUser._id, { $push: { authorized: linkHandler_1.channel === null || linkHandler_1.channel === void 0 ? void 0 : linkHandler_1.channel._id } }); //push the channel id in authorized array 
        console.log("doneee true wrongcounter 0");
    }
    else {
        if (calcResult_1.wrongCounter > 0) {
            if (linkHandler_1.channel) {
                yield channel_1.default.findOneAndUpdate({ _id: linkHandler_1.channel._id }, { $inc: { expirePoints: -1 } });
            }
        }
    }
    console.log(linkHandler_1.channel);
    const thisChannel = yield channel_1.default.findById(linkHandler_1.channel === null || linkHandler_1.channel === void 0 ? void 0 : linkHandler_1.channel._id);
    let expiryPoint = (thisChannel === null || thisChannel === void 0 ? void 0 : thisChannel.expirePoints) ? thisChannel === null || thisChannel === void 0 ? void 0 : thisChannel.expirePoints : -1;
    if (expiryPoint >= 0) {
        res.render('results', {
            results: userAnswers,
            slideId: linkHandler_1.channel.slideId,
            quizId: linkHandler_1.channel.quizId,
            expire: expiryPoint,
            wrongCounter: calcResult_1.wrongCounter
        });
    }
    else if (expiryPoint == -1) {
        res.render('message-to-user', {
            message: "Limit Exceeded. Link Expired. You couldn't answer all questions.",
            btnText: "Main Page",
            btnHref: "/"
        });
    }
    else {
        console.log("hi ia m the 404");
        res.redirect('/page404');
    }
});
exports.default = result;
//# sourceMappingURL=result.js.map