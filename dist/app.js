"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const _404_1 = __importDefault(require("./utils/404"));
//npm-packages
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
//global-middlewares
const cloudinaryConfig_1 = require("./utils/cloudinaryConfig");
const startSession_1 = __importDefault(require("./Auth/middlewares/startSession"));
const refreshThisUser_1 = __importDefault(require("./Auth/middlewares/refreshThisUser"));
//route-middlewares
const authenticator_1 = __importDefault(require("./Auth/services/authenticator"));
const slide_auth_1 = __importDefault(require("./Auth/services/slide-auth"));
//routes
const routes_1 = __importDefault(require("./slide/routes/routes"));
const routes_2 = __importDefault(require("./Auth/routes/routes"));
const routes_3 = __importDefault(require("./User/routes/routes"));
const routes_4 = __importDefault(require("./home/routes/routes"));
const routes_5 = __importDefault(require("./quiz/routes/routes"));
const app = (0, express_1.default)();
exports.default = app;
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.set('view engine', 'ejs');
app.use(express_1.default.static(path_1.default.resolve(__dirname, '..', 'public')));
app.set('views', path_1.default.resolve(__dirname, '..', 'views'));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(startSession_1.default);
app.use(refreshThisUser_1.default);
app.use('*', cloudinaryConfig_1.cloudinaryConfig);
app.use('/', routes_4.default); //home routes
app.use('/a', routes_2.default); //auth routes
app.use('/u', authenticator_1.default, routes_3.default); //user routes
app.use('/q', authenticator_1.default, routes_5.default); // quiz routes
app.use('/s', slide_auth_1.default, routes_1.default); //slide routes
//*::::::::::::::::::::::::::::::::::::::::
app.get('/logmyvalue', (req, res) => {
    console.log(Date.now());
    res.redirect('/');
    const array = [2, 34, 3];
    if (true) {
        console.log(array.includes(21), "huzzah");
    }
});
// *404 //always write it on the end
app.use(_404_1.default);
//# sourceMappingURL=app.js.map