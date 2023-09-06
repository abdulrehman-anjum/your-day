"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const home_1 = __importDefault(require("../controllers/home"));
const linkHandler_1 = __importDefault(require("../../User/controllers/channels/linkHandler"));
const router = express_1.default.Router();
router.get('/', home_1.default);
router.get('/link/:channelName', linkHandler_1.default); //change the word link to smthng else like present or something
exports.default = router;
//# sourceMappingURL=routes.js.map