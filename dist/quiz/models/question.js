"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const questionSchema = new Schema({
    question: String,
    options: [{ type: String }],
    correct: Number
});
const Question = mongoose_1.default.model('Question', questionSchema);
exports.default = Question;
//# sourceMappingURL=question.js.map