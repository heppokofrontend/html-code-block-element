"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLCodeBlockElement = void 0;
const HTMLCodeBlockElement_1 = __importDefault(require("./class/HTMLCodeBlockElement"));
const highlight_1 = require("./utils/highlight");
require("./utils/add-style");
const hljs = require('highlight.js/lib/common');
HTMLCodeBlockElement_1.default.highlight = highlight_1.mkHighlightCallback(hljs);
customElements.define('code-block', HTMLCodeBlockElement_1.default);
exports.HTMLCodeBlockElement = HTMLCodeBlockElement_1.default;
