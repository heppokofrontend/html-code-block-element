"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLCodeBlockElement = void 0;
const common_1 = require("highlight.js/lib/common");
const HTMLCodeBlockElement_1 = require("./class/HTMLCodeBlockElement");
require("./utils/add-style");
HTMLCodeBlockElement_1.default.endgine = common_1.default;
customElements.define('code-block', HTMLCodeBlockElement_1.default);
exports.HTMLCodeBlockElement = HTMLCodeBlockElement_1.default;
