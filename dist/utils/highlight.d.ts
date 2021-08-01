import { HLJSApi, HighlightOptions } from 'highlight.js';
/**
 * Callback maker for highlight.js
 * @param endgine - A library for performing syntax highlighting.
 * @return - A function for HTMLCodeBlockElement.highlight
 */
export declare const mkHighlightCallback: (endgine: HLJSApi) => (src: string, options?: HighlightOptions | undefined) => {
    markup: string;
};
