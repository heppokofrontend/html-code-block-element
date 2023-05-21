"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHighlightCallback = exports.HTMLCodeBlockElement = void 0;
const HTMLCodeBlockElement_1 = __importDefault(require("./class/HTMLCodeBlockElement"));
const createHighlightCallback_1 = require("./utils/createHighlightCallback");
exports.HTMLCodeBlockElement = HTMLCodeBlockElement_1.default;
exports.createHighlightCallback = createHighlightCallback_1.createHighlightCallback;
