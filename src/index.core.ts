import hljs from 'highlight.js/lib/core';
import CustomElementConstructor from './class/HTMLCodeBlockElement';
import {mkHighlightCallback} from './utils/highlight';
import './utils/add-style';

CustomElementConstructor.highlight = mkHighlightCallback(hljs);
customElements.define('code-block', CustomElementConstructor);

export const HTMLCodeBlockElement = CustomElementConstructor;
