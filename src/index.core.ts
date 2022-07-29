import CustomElementConstructor from '@/class/HTMLCodeBlockElement';
import {mkHighlightCallback} from '@/utils/highlight';
import '@/utils/add-style';

const hljs = require('highlight.js/lib/core');

CustomElementConstructor.highlight = mkHighlightCallback(hljs);
customElements.define('code-block', CustomElementConstructor);

export const HTMLCodeBlockElement = CustomElementConstructor;
