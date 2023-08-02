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
// import { questions } from '../utils/questions'
const calcResult_1 = __importDefault(require("../services/calcResult"));
const question_1 = __importDefault(require("../models/question"));
const result = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const questions = yield question_1.default.find().lean();
    // const answerKey: Array<number> = questions.map(question => Number(question.correct)); 
    const userAnswers = JSON.parse(JSON.stringify(getAnswer_1.answers));
    console.log("iser amserrr", userAnswers);
    getAnswer_1.answers.splice(0, getAnswer_1.answers.length);
    console.log("iser amserrr", userAnswers);
    (0, calcResult_1.default)(userAnswers, questions);
    res.render('results', { results: userAnswers });
});
exports.default = result;
//# sourceMappingURL=result.js.map