"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req, res) {
    res.render('message-to-user', {
        message: `
                    Welcome ${req.body.username}
                `,
        btnHref: "/quiz",
        btnText: "Prove Your Identity"
    });
}
exports.default = default_1;
//# sourceMappingURL=welcome-page.js.map