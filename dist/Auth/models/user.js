"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    identified: {
        type: Boolean,
        default: false,
        required: true
    },
    personal_id: {
        //! use this field as objectId in quiz schema
        type: String,
        unique: true
    },
    deviceCount: {
        type: Number,
        default: 0
    }
});
const User = mongoose_1.default.model('User', userSchema);
exports.default = User;
//# sourceMappingURL=user.js.map