"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTMLCodeBlockElement = void 0;

var _highlight = _interopRequireDefault(require("highlight.js"));

var _HTMLCodeBlockElement = _interopRequireDefault(require("./class/HTMLCodeBlockElement"));

require("./utils/add-style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_HTMLCodeBlockElement["default"].endgine = _highlight["default"];
customElements.define('code-block', _HTMLCodeBlockElement["default"]);
var HTMLCodeBlockElement = _HTMLCodeBlockElement["default"];
exports.HTMLCodeBlockElement = HTMLCodeBlockElement;