"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLCodeBlockElement = void 0;
const highlight_js_1 = require("highlight.js");
const HTMLCodeBlockElement_1 = require("./class/HTMLCodeBlockElement");
require("./utils/add-style");
HTMLCodeBlockElement_1.default.endgine = highlight_js_1.default;
customElements.define('code-block', HTMLCodeBlockElement_1.default);
exports.HTMLCodeBlockElement = HTMLCodeBlockElement_1.default;
