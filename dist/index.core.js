"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLCodeBlockElement = void 0;
const core_1 = __importDefault(require("highlight.js/lib/core"));
const HTMLCodeBlockElement_1 = __importDefault(require("./class/HTMLCodeBlockElement"));
const createHighlightCallback_1 = require("./utils/createHighlightCallback");
require("./effects/add-style");
HTMLCodeBlockElement_1.default.highlight = (0, createHighlightCallback_1.createHighlightCallback)(core_1.default);
customElements.define('code-block', HTMLCodeBlockElement_1.default);
exports.HTMLCodeBlockElement = HTMLCodeBlockElement_1.default;
