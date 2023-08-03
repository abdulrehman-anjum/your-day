"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const quizSchema = new Schema({
    quiz_creator: {
        type: mongoose_1.default.Schema.ObjectId,
        ref: "User"
    },
    questions: [{
            type: mongoose_1.default.Schema.ObjectId,
            ref: "Question"
        }]
});
const Quiz = mongoose_1.default.model('Quiz', quizSchema);
exports.default = Quiz;
//# sourceMappingURL=quiz.js.map