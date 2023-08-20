"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const channelSchema = new Schema({
    channelName: {
        type: String,
        unique: true
    },
    quizId: {
        type: mongoose_1.default.Schema.ObjectId,
        ref: "Quiz",
        required: true
    },
    expirePoints: {
        type: Number,
        default: 3
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const Channel = mongoose_1.default.model('Channel', channelSchema);
exports.default = Channel;
//# sourceMappingURL=channel.js.map