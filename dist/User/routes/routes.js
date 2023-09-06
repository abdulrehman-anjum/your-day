"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createChannelPage_1 = __importDefault(require("../controllers/channels/createChannelPage"));
const createChannel_1 = __importDefault(require("../controllers/channels/createChannel"));
const addQuestionPage_1 = __importDefault(require("../controllers/quiz/addQuestionPage"));
const addQuestion_1 = __importDefault(require("../controllers/quiz/addQuestion"));
const createQuizPage_1 = __importDefault(require("../controllers/quiz/createQuizPage"));
const createQuiz_1 = __importDefault(require("../controllers/quiz/createQuiz"));
const quizPage_1 = __importDefault(require("../controllers/quiz/quizPage"));
const quizList_1 = __importDefault(require("../controllers/quiz/quizList"));
const multer_1 = require("../middlewares/multer");
const sameUsernameChecker_1 = __importDefault(require("../middlewares/sameUsernameChecker"));
const channelList_1 = __importDefault(require("../controllers/channels/channelList"));
const createSlide_1 = __importDefault(require("../controllers/slides/createSlide"));
const createSlidePage_1 = __importDefault(require("../controllers/slides/createSlidePage"));
const slideList_1 = __importDefault(require("../controllers/slides/slideList"));
const slidePage_1 = __importDefault(require("../controllers/slides/slidePage"));
const addSlidePage_1 = __importDefault(require("../controllers/slides/addSlidePage"));
const addSlidePagePage_1 = __importDefault(require("../controllers/slides/addSlidePagePage"));
const addMediaPage_1 = __importDefault(require("../controllers/media/addMediaPage"));
const addMedia_1 = __importDefault(require("../controllers/media/addMedia"));
const imageList_1 = __importDefault(require("../controllers/media/imageList"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.render('admin');
});
//CHANNELS
router.get('/channel-list', channelList_1.default);
router.get('/createChannel', createChannelPage_1.default);
router.post('/createChannel/quiz', createChannel_1.default); //save the channel and create a link
router.post('/createChannel/name', sameUsernameChecker_1.default); //save the channel and create a link
//SLIDE
router.get('/create-slide', createSlidePage_1.default);
router.post('/create-slide', createSlide_1.default);
router.get('/slide-list', slideList_1.default);
router.get('/slide/:slideId', slidePage_1.default); //pages <images, page-no, audio>
//pages
router.get('/slide/:slideId/add-slide-page', addSlidePagePage_1.default);
router.post('/slide/add-slide-page/:slideId', addSlidePage_1.default);
//media
router.get('/slide/:pageId/add-media', addMediaPage_1.default);
router.post('/slide/:pageId/add-media', multer_1.multerUploads, addMedia_1.default);
//QUIZ
router.get('/create-quiz', createQuizPage_1.default);
router.post('/create-quiz', createQuiz_1.default);
router.get('/quiz-list', quizList_1.default);
router.get('/quiz/:quizId', quizPage_1.default);
//questions
router.get('/quiz/:quizId/add-question', addQuestionPage_1.default);
router.post('/quiz/add-question/:quizId', addQuestion_1.default);
//IMAGE
router.get('/image-list', imageList_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map