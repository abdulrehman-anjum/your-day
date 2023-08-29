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
const question_1 = __importDefault(require("../../quiz/models/question"));
const quiz_1 = __importDefault(require("../../quiz/models/quiz"));
//! Add questions in the quiz array 
const addQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const options = [req.body.a, req.body.b, req.body.c];
    const question = {
        question: req.body.question,
        options: options,
        correct: Number(req.body.correct)
    };
    const newQuestion = new question_1.default(question);
    const q = yield newQuestion.save();
    //push the question in quiz
    yield quiz_1.default.findByIdAndUpdate(req.params.quizId, { $push: { questions: q._id } });
    res.redirect(`/u/quiz/${req.params.quizId}`);
});
exports.default = addQuestion;
//# sourceMappingURL=addQuestion.js.map