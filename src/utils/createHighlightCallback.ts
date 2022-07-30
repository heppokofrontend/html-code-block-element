import {HLJSApi} from 'highlight.js';
import {EndgineFunction} from '@/class/HTMLCodeBlockElement';

/**
 * Callback maker for highlight.js
 * @param endgine - A library for performing syntax highlighting.
 * @return - A function for HTMLCodeBlockElement.highlight
 */
export const createHighlightCallback =
  (endgine: HLJSApi): EndgineFunction =>
  ({src, options}) => {
    const hljs: HLJSApi = endgine;

    if (
      // Verifying the existence of a language
      options?.language &&
      hljs.getLanguage(options.language)
    ) {
      return {
        markup: hljs.highlight(src, options).value,
      };
    }

    return {
      markup: hljs.highlightAuto(src).value,
    };
  };
