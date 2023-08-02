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
const question_1 = __importDefault(require("../models/question"));
const quizPage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const questions = yield question_1.default.find().lean();
    console.log(questions.length);
    if (Number(req.params.qn ? req.params.qn : 0) < questions.length) {
        res.render("quiz", {
            question: questions[Number(req.params.qn ? req.params.qn : 0)]
        });
    }
});
exports.default = quizPage;
//# sourceMappingURL=quizPage.js.map