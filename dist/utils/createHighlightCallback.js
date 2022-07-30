"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHighlightCallback = void 0;
/**
 * Callback maker for highlight.js
 * @param endgine - A library for performing syntax highlighting.
 * @return - A function for HTMLCodeBlockElement.highlight
 */
const createHighlightCallback = (endgine) => ({ src, options }) => {
    const hljs = endgine;
    if (
    // Verifying the existence of a language
    options?.language &&
        hljs.getLanguage(options.language)) {
        return {
            markup: hljs.highlight(src, options).value,
        };
    }
    return {
        markup: hljs.highlightAuto(src).value,
    };
};
exports.createHighlightCallback = createHighlightCallback;
