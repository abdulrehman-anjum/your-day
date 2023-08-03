"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.setMode = exports.mode = void 0;
exports.mode = "normal";
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
//image upload
const cloudinaryConfig_1 = require("./utils/cloudinaryConfig");
//routes
const admin_routes_1 = __importDefault(require("./admin/routes/admin-routes"));
const routes_1 = __importDefault(require("./quiz/routes/routes"));
const routes_2 = __importDefault(require("./slide/routes/routes"));
const cookie_authed_1 = __importStar(require("./utils/cookie-authed"));
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', path_1.default.resolve(__dirname, '..', 'views'));
app.use(express_1.default.static(path_1.default.resolve(__dirname, '..', 'public')));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
//image upload
app.use('*', cloudinaryConfig_1.cloudinaryConfig);
app.use('/admin', cookie_authed_1.default, admin_routes_1.default);
app.use('/quiz', cookie_authed_1.default, routes_1.default);
app.use('/slide', cookie_authed_1.default, routes_2.default);
function setMode(newMode) {
    return __awaiter(this, void 0, void 0, function* () { exports.mode = newMode; });
}
exports.setMode = setMode;
app.get('/', (req, res) => {
    const restore2 = cookie_authed_1.restore;
    (0, cookie_authed_1.setRestoreValue)(false);
    res.render('index', { mode: restore2 === true ? exports.mode : "mode" });
});
exports.default = app;
//# sourceMappingURL=app.js.map