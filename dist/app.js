"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const authenticated_1 = __importDefault(require("./utils/authenticated"));
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', path_1.default.resolve(__dirname, '..', 'views'));
app.use(express_1.default.static(path_1.default.resolve(__dirname, '..', 'public')));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
//image upload
app.use('*', cloudinaryConfig_1.cloudinaryConfig);
app.use('/admin', authenticated_1.default, admin_routes_1.default);
app.use('/quiz', authenticated_1.default, routes_1.default);
app.use('/slide', authenticated_1.default, routes_2.default);
app.get('/', (req, res) => {
    res.render('index');
});
exports.default = app;
//# sourceMappingURL=app.js.map