"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLCodeBlockElement = void 0;
const core_1 = require("highlight.js/lib/core");
const HTMLCodeBlockElement_1 = require("./class/HTMLCodeBlockElement");
require("./utils/add-style");
HTMLCodeBlockElement_1.default.endgine = core_1.default;
customElements.define('code-block', HTMLCodeBlockElement_1.default);
exports.HTMLCodeBlockElement = HTMLCodeBlockElement_1.default;
