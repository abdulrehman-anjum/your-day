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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let DEVMODE = false;
// export const browserID: string = generateUniqueString(23)
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
//image upload
const cloudinaryConfig_1 = require("./utils/cloudinaryConfig");
//routes
const routes_1 = __importDefault(require("./Auth/routes/routes"));
const admin_routes_1 = __importDefault(require("./admin/routes/admin-routes"));
const routes_2 = __importDefault(require("./quiz/routes/routes"));
const routes_3 = __importDefault(require("./slide/routes/routes"));
const cookie_authed_1 = __importStar(require("./Auth/services/cookie-authed"));
const admin_authed_1 = __importDefault(require("./Auth/services/admin-authed"));
const querystring_1 = require("querystring");
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', path_1.default.resolve(__dirname, '..', 'views'));
app.use(express_1.default.static(path_1.default.resolve(__dirname, '..', 'public')));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
//image upload
app.use('*', cloudinaryConfig_1.cloudinaryConfig);
app.use('/auth', routes_1.default);
app.use('/admin', admin_authed_1.default, admin_routes_1.default);
app.use('/quiz', cookie_authed_1.default, routes_2.default);
app.use('/slide', cookie_authed_1.default, routes_3.default);
//!!! explore 'express-session' 
app.get('/', (req, res) => {
    const restore2 = cookie_authed_1.restore;
    (0, cookie_authed_1.setRestoreValue)(false);
    res.render('index', { mode: restore2 ? "login" : "homepage" });
});
//DEV SIDE
app.get('/devAuth', (req, res) => {
    res.send(`
            <form action="/devAuth" method="post">
                <input type="text" name="devAuth" placeholder='test your luck'>
                <button type="submit">I AM A DEVELOPER</button>
            </form>

        `);
});
app.post('/devAuth', (req, res) => {
    var _a;
    if (((_a = req.body) === null || _a === void 0 ? void 0 : _a.devAuth) === process.env.DEVAUTH) {
        DEVMODE = true;
        res.send(`
                <h1><a href='/devAuth/cookies'>ALL COOKIES</a></h1>
            `);
    }
    else {
        DEVMODE = false;
        res.send(`   
                you are not a dev
                <a href='/devAuth'>NO i am the real developer</a>
            `);
    }
});
app.get('/devAuth/cookies', (req, res) => {
    if (DEVMODE) {
        const cookies = (0, querystring_1.stringify)(req.cookies);
        res.send(`
            ${cookies}
        `);
    }
    else {
        res.redirect('/devAuth');
    }
});
exports.default = app;
//# sourceMappingURL=app.js.map