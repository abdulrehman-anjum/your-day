"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const currentTime = new Date().toLocaleTimeString('en-US', { weekday: 'long', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield mongoose_1.default.connect(`${process.env.MONGO_URI}`);
    console.log(`🟢 Mongo db connected at ${currentTime}`);
});
exports.default = connectDB;
//# sourceMappingURL=connectDB.js.map