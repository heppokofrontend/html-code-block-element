const hljs = require('highlight.js');

export default class HTMLCodeBlockElement extends HTMLElement {

}

// コンストラクタ名が難読化で変わってしまうため
Object.defineProperty(HTMLCodeBlockElement, 'name', {
  value: 'HTMLCodeBlockElement',
});
