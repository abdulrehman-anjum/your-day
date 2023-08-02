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
const getAnswer_1 = require("../controllers/getAnswer");
const question_1 = __importDefault(require("../models/question"));
function takeAnswer(option) {
    return __awaiter(this, void 0, void 0, function* () {
        const questions = yield question_1.default.find().lean();
        console.log(option);
        if (getAnswer_1.answers.length < questions.length) {
            let answer = {
                answer: Number(option),
                valid: false
            };
            getAnswer_1.answers.push(answer);
            console.log(getAnswer_1.answers.length, "answers length");
        }
        return getAnswer_1.answers;
    });
}
exports.default = takeAnswer;
//# sourceMappingURL=takeAnswer.js.map