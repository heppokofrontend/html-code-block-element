import hljs from 'highlight.js';
import CustomElementConstructor from './class/HTMLCodeBlockElement';
import './utils/add-style';

CustomElementConstructor.endgine = hljs;
customElements.define('code-block', CustomElementConstructor);

export const HTMLCodeBlockElement = CustomElementConstructor;
