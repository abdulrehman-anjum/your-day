"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linkHandler_1 = require("../../User/controllers/linkHandler");
function default_1(req, res) {
    if (linkHandler_1.channel) {
        (0, linkHandler_1.setChannelVal)(false);
        res.redirect(`/q/start/${linkHandler_1.channel === null || linkHandler_1.channel === void 0 ? void 0 : linkHandler_1.channel.quizId}`);
    }
    else {
        res.render('message-to-user', {
            message: `
                    Welcome ${req.body.username}
                `,
            btnHref: "/",
            btnText: "Main Page"
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=welcome-page.js.map