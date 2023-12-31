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
const getAnswer_1 = require("./getAnswer");
const quiz_1 = __importDefault(require("../models/quiz"));
const questions_1 = require("../utils/questions");
const quizPage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let quiz;
    if (questions_1.fetchedQuestions.length === 0) {
        quiz = yield quiz_1.default.findOne({ _id: req.params.quizId }).populate('questions');
        const newQuestions = (quiz === null || quiz === void 0 ? void 0 : quiz.questions) ? quiz.questions : [];
        (0, questions_1.setQuizQuestions)(newQuestions);
    }
    const questions = questions_1.fetchedQuestions;
    console.log("questions", quiz);
    res.render("quiz", {
        quiz: quiz,
        question: questions[getAnswer_1.answers.length]
    });
});
exports.default = quizPage;
//# sourceMappingURL=quizPage.js.map