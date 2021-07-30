import hljs from 'highlight.js/lib/common';
import CustomElementConstructor from './class/HTMLCodeBlockElement';
import './utils/add-style';

CustomElementConstructor.endgine = hljs;
customElements.define('code-block', CustomElementConstructor);

export const HTMLCodeBlockElement = CustomElementConstructor;
