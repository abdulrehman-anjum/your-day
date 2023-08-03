"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyAnswersArray = void 0;
const getAnswer_1 = require("../controllers/getAnswer");
function emptyAnswersArray() {
    getAnswer_1.answers.splice(0, getAnswer_1.answers.length);
}
exports.emptyAnswersArray = emptyAnswersArray;
//# sourceMappingURL=emptyAnswersArray.js.map