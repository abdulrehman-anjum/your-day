"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const connectDB_1 = __importDefault(require("./connectDB"));
const app_1 = __importDefault(require("./app"));
(0, connectDB_1.default)();
app_1.default.listen(process.env.PORT, () => console.log(`🔥 Server running at http:localhost:${process.env.PORT}/`));
//# sourceMappingURL=index.js.map