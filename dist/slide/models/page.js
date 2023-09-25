"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const pageSchema = new Schema({
    page_creator: {
        type: mongoose_1.default.Schema.ObjectId,
        ref: "User"
    },
    page_name: {
        type: String,
        required: true
    },
    page_desc: {
        type: String,
    },
    image: {
        type: mongoose_1.default.Schema.ObjectId,
        ref: "Image"
    },
    audio: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const Page = mongoose_1.default.model('Page', pageSchema);
exports.default = Page;
//# sourceMappingURL=page.js.map