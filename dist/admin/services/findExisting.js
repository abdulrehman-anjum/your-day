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
function find(modelname, fieldname, userInput) {
    return __awaiter(this, void 0, void 0, function* () {
        const Model = mongoose_1.default.models[`${modelname}`];
        console.log("findExisting", Model, "fefefefef");
        if (Model) {
            const query = {}; //CHATGPT //!investigate further
            query[fieldname] = userInput;
            const foundusername = yield Model.findOne(query);
            const found = (yield foundusername) ? true : false;
            console.log("this is found ", found, foundusername);
            return found;
        }
        return false;
    });
}
exports.default = find;
//# sourceMappingURL=findExisting.js.map