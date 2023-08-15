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
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrongCounter = void 0;
function results(userAnswers, questions) {
    return __awaiter(this, void 0, void 0, function* () {
        exports.wrongCounter = 0;
        let i = 0;
        console.log(userAnswers, "calcResult");
        userAnswers.forEach(answer => {
            if (answer.answer === questions[i].correct) {
                answer.valid = true;
            }
            else {
                exports.wrongCounter = exports.wrongCounter + 1;
            }
            answer.answer = questions[i].options[Number(answer.answer)]; //turning the number into a value (correct option string)
            i = i + 1;
        });
    });
}
exports.default = results;
//# sourceMappingURL=calcResult.js.map