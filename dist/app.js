"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let DEVMODE = false;
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
//image upload
const cloudinaryConfig_1 = require("./utils/cloudinaryConfig");
//routes
const routes_1 = __importDefault(require("./home/routes/routes"));
const routes_2 = __importDefault(require("./Auth/routes/routes"));
const admin_routes_1 = __importDefault(require("./admin/routes/admin-routes"));
const routes_3 = __importDefault(require("./quiz/routes/routes"));
const routes_4 = __importDefault(require("./slide/routes/routes"));
const authenticator_1 = __importDefault(require("./Auth/services/authenticator"));
const querystring_1 = require("querystring"); // investigate this later
const startSession_1 = __importDefault(require("./Auth/middlewares/startSession"));
const refreshThisUser_1 = __importDefault(require("./Auth/middlewares/refreshThisUser"));
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', path_1.default.resolve(__dirname, '..', 'views'));
app.use(express_1.default.static(path_1.default.resolve(__dirname, '..', 'public')));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
//image upload
app.use('*', cloudinaryConfig_1.cloudinaryConfig);
//Custom Global Middlewares
app.use(startSession_1.default);
app.use(refreshThisUser_1.default);
app.use('/', routes_1.default);
app.use('/auth', routes_2.default);
app.use('/quiz', routes_3.default);
app.use('/slide', authenticator_1.default, routes_4.default);
app.use('/admin', authenticator_1.default, admin_routes_1.default);
//!!! explore 'express-session' ???????
//*DEV SIDE
app.get('/logmyvalue', (req, res) => {
    console.log(Date.now());
    res.redirect('/');
});
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