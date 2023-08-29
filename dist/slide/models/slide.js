"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const slideSchema = new Schema({
    slide_name: {
        type: String,
        required: true
    },
    slide_creator: {
        type: mongoose_1.default.Schema.ObjectId,
        ref: "User"
    },
    pages: [{
            type: mongoose_1.default.Schema.ObjectId,
            ref: "Page"
        }],
    // slide_audio: {
    //     type: String
    // },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const Slide = mongoose_1.default.model('Slide', slideSchema);
exports.default = Slide;
//# sourceMappingURL=slide.js.map