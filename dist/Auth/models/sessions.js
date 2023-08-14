"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const sessionSchema = new Schema({
    browserId: {
        type: String,
        required: true
    },
    loggedUser: {
        type: mongoose_1.default.Schema.ObjectId,
        ref: "User"
    },
    createdAt: {
        type: Date,
        expires: '30d',
        default: Date.now
    }
});
const Session = mongoose_1.default.model('Session', sessionSchema);
exports.default = Session;
//# sourceMappingURL=sessions.js.map