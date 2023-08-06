"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addQuestionPage_1 = __importDefault(require("../controllers/addQuestionPage"));
const uploadImagePage_1 = __importDefault(require("../controllers/uploadImagePage"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.render('admin');
});
router.get('/add-question', addQuestionPage_1.default);
// router.post('/add-question', addQuestion)
router.get('/upload-image', uploadImagePage_1.default);
// router.post('/upload-image', multerUploads, cloudinaryUploads)
exports.default = router;
//# sourceMappingURL=admin-routes.js.map