import hljs from 'highlight.js/lib/core';
import CustomElementConstructor from '@/class/HTMLCodeBlockElement';
import {createHighlightCallback} from '@/utils/createHighlightCallback';
import '@/effects/add-style';

CustomElementConstructor.highlight = createHighlightCallback(hljs);
customElements.define('code-block', CustomElementConstructor);

export const HTMLCodeBlockElement = CustomElementConstructor;
