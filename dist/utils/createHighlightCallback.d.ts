import { HLJSApi } from 'highlight.js';
import { EndgineFunction } from '../class/HTMLCodeBlockElement';
/**
 * Callback maker for highlight.js
 * @param endgine - A library for performing syntax highlighting.
 * @return - A function for HTMLCodeBlockElement.highlight
 */
export declare const createHighlightCallback: (endgine: HLJSApi) => EndgineFunction;
