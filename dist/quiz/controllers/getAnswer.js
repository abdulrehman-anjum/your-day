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
exports.answers = void 0;
const takeAnswer_1 = __importDefault(require("../services/takeAnswer"));
const questions_1 = require("../utils/questions");
exports.answers = [];
const submitQuiz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const questions = questions_1.fetchedQuestions;
    yield (0, takeAnswer_1.default)(Number(req.body.option));
    res.redirect(exports.answers.length < questions.length ? '/quiz/start' : '/quiz/result');
});
exports.default = submitQuiz;
//# sourceMappingURL=getAnswer.js.map