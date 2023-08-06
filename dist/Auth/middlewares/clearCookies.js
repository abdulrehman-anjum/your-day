"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req, res, next) {
    res.clearCookie;
    res.cookie("loggedOut", true);
    next();
}
exports.default = default_1;
//# sourceMappingURL=clearCookies.js.map