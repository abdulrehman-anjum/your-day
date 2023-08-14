"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addQuestionPage_1 = __importDefault(require("../controllers/addQuestionPage"));
const uploadImagePage_1 = __importDefault(require("../controllers/uploadImagePage"));
const addQuestion_1 = __importDefault(require("../controllers/addQuestion"));
const createQuizPage_1 = __importDefault(require("../controllers/createQuizPage"));
const createQuiz_1 = __importDefault(require("../controllers/createQuiz"));
const quizPage_1 = __importDefault(require("../controllers/quizPage"));
const quizList_1 = __importDefault(require("../controllers/quizList"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.render('admin');
});
router.get('/create-quiz', createQuizPage_1.default);
router.post('/create-quiz', createQuiz_1.default);
router.get('/quiz-list', quizList_1.default);
router.get('/add-question/quiz/:quizId', quizPage_1.default);
router.get('/add-question/quiz/:quizId/add-question', addQuestionPage_1.default);
router.post('/add-question/quiz/:quizId', addQuestion_1.default);
router.get('/upload-image', uploadImagePage_1.default);
// router.post('/upload-image', multerUploads, cloudinaryUploads)
exports.default = router;
//# sourceMappingURL=admin-routes.js.map