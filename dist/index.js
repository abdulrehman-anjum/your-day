"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const connectDB_1 = __importDefault(require("./utils/connectDB"));
const currentTime = new Date().toLocaleTimeString('en-US', { weekday: 'long', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
const app_1 = __importDefault(require("./app"));
(0, connectDB_1.default)();
app_1.default.listen(process.env.PORT, () => console.log(`🔥 Server running on http:localhost:${process.env.PORT}/ at ${currentTime}`));
//# sourceMappingURL=index.js.map