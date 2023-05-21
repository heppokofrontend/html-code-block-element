"use strict";
// Inserts the style element into the page for
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stylesheet_1 = __importDefault(require("../stylesheet"));
// the default style of the code-block element.
const style = document.createElement('style');
const link = document.querySelector('head link, head style');
style.textContent = stylesheet_1.default;
style.dataset.id = 'html-code-block-element';
if (link) {
    link.before(style);
}
else {
    document.head.append(style);
}
