"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createChannelPage_1 = __importDefault(require("../controllers/createChannelPage"));
const createChannel_1 = __importDefault(require("../controllers/createChannel"));
const addQuestionPage_1 = __importDefault(require("../controllers/addQuestionPage"));
const uploadImagePage_1 = __importDefault(require("../controllers/uploadImagePage"));
const addQuestion_1 = __importDefault(require("../controllers/addQuestion"));
const createQuizPage_1 = __importDefault(require("../controllers/createQuizPage"));
const createQuiz_1 = __importDefault(require("../controllers/createQuiz"));
const quizPage_1 = __importDefault(require("../controllers/quizPage"));
const quizList_1 = __importDefault(require("../controllers/quizList"));
const multer_1 = require("../middlewares/multer");
const cloudinaryUploads_1 = __importDefault(require("../controllers/cloudinaryUploads"));
const sameUsernameChecker_1 = __importDefault(require("../middlewares/sameUsernameChecker"));
const channelList_1 = __importDefault(require("../controllers/channelList"));
const createSlide_1 = __importDefault(require("../controllers/createSlide"));
const createSlidePage_1 = __importDefault(require("../controllers/createSlidePage"));
const slideList_1 = __importDefault(require("../controllers/slideList"));
const slidePage_1 = __importDefault(require("../controllers/slidePage"));
const addSlidePage_1 = __importDefault(require("../controllers/addSlidePage"));
const addSlidePagePage_1 = __importDefault(require("../controllers/addSlidePagePage"));
const addMediaPage_1 = __importDefault(require("../controllers/addMediaPage"));
const addMedia_1 = __importDefault(require("../controllers/addMedia"));
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
router.get('/upload-image', uploadImagePage_1.default);
router.post('/upload-image', multer_1.multerUploads, cloudinaryUploads_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map