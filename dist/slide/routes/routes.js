"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const slide_1 = __importDefault(require("../controllers/slide"));
const router = express_1.default.Router();
router.get('/start/:slideId', slide_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map