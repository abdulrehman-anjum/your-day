"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const login_1 = __importDefault(require("../controllers/login"));
const login_page_1 = __importDefault(require("../controllers/login-page"));
const logout_1 = __importDefault(require("../controllers/logout"));
const router = express_1.default.Router();
router.get('/login', login_page_1.default);
router.post('/login', login_1.default);
router.get('/logout', logout_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map