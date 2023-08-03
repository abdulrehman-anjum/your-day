"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const quizPage_1 = __importDefault(require("../controllers/quizPage"));
const getAnswer_1 = __importDefault(require("../controllers/getAnswer"));
const result_1 = __importDefault(require("../controllers/result"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.render('quiz-home');
});
router.get('/start', quizPage_1.default);
router.get('/result', result_1.default);
router.post('/submit-quiz', getAnswer_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map