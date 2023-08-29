"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req, res) {
    res.render('message-to-user', {
        message: 'Logged Out',
        btnHref: "/a/login",
        btnText: "Login Again"
    });
}
exports.default = default_1;
//# sourceMappingURL=bye-page.js.map