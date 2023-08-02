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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addQuestionPage_1 = __importDefault(require("../controllers/addQuestionPage"));
const uploadImagePage_1 = __importDefault(require("../controllers/uploadImagePage"));
const addQuestion_1 = __importDefault(require("../controllers/addQuestion"));
const multer_1 = require("../middlewares/multer");
const cloudinaryConfig_1 = require("../../cloudinaryConfig");
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.send(`
        <h1 align=center>Hi
        <br><a align=center href='/admin/add-question'>Add Question</a>
        <br><a align=center href='/admin/upload-image'>Upload Image</a>
        </h1>
    `);
});
router.get('/add-question', addQuestionPage_1.default);
router.post('/add-question', addQuestion_1.default);
router.get('/upload-image', uploadImagePage_1.default);
router.post('/upload-image', multer_1.multerUploads, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (req.file) {
        const file = yield (0, multer_1.dataUri)(req.file);
        const cont = ((_a = file === null || file === void 0 ? void 0 : file.content) === null || _a === void 0 ? void 0 : _a.toString()) ? (_b = file === null || file === void 0 ? void 0 : file.content) === null || _b === void 0 ? void 0 : _b.toString() : "";
        console.log(cont, "this the file2480");
        try {
            yield cloudinaryConfig_1.uploader.uploader.upload(cont).then(result => {
                const image = result.url;
                console.log(image);
                res.send(`image uploaded: <a href='${image}'>see here<a>`);
            });
        }
        catch (error) {
            console.error("Error uploading image:", error);
            res.status(500).send("Image upload failed");
        }
    }
}));
exports.default = router;
//# sourceMappingURL=admin-routes.js.map