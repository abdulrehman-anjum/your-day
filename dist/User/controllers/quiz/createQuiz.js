"use strict";
//create quiz and then redirect to add question page
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
const quiz_1 = __importDefault(require("../../../quiz/models/quiz"));
const refreshThisUser_1 = require("../../../Auth/middlewares/refreshThisUser");
let counter = 1;
function default_1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const quiz = {
            quiz_name: req.body.quizName === '' ? `Quiz - ${counter++}` : req.body.quizName,
            quiz_creator: refreshThisUser_1.currentUser._id,
            questions: []
        };
        const newQuiz = new quiz_1.default(quiz);
        yield newQuiz.save();
        res.redirect('/u/quiz-list');
    });
}
exports.default = default_1;
//# sourceMappingURL=createQuiz.js.map