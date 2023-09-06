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
exports.setChannelName = exports.setChannelCreation = exports.channelName = exports.channelCreation = void 0;
const findExisting_1 = __importDefault(require("../services/findExisting"));
const lodash_1 = __importDefault(require("lodash"));
const refreshThisUser_1 = require("../../Auth/middlewares/refreshThisUser");
exports.channelCreation = false;
exports.channelName = '';
function setChannelCreation(val) {
    return __awaiter(this, void 0, void 0, function* () {
        exports.channelCreation = val;
    });
}
exports.setChannelCreation = setChannelCreation;
function setChannelName(val) {
    return __awaiter(this, void 0, void 0, function* () {
        exports.channelName = val;
    });
}
exports.setChannelName = setChannelName;
function default_1(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        exports.channelName = req.body.channelName;
        const found = yield (0, findExisting_1.default)('Channel', 'channelName', lodash_1.default.kebabCase(`${exports.channelName} by ${refreshThisUser_1.currentUser.username}`));
        if (!found) {
            yield setChannelCreation(true);
        }
        res.redirect('/u/createChannel');
    });
}
exports.default = default_1;
//# sourceMappingURL=sameUsernameChecker.js.map