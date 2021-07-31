"use strict";

// Inserts the style element into the page for
// the default style of the code-block element.
var style = document.createElement('style');
var link = document.querySelector('head link, head style');
style.textContent = "\n  code-block {\n    margin: 1em 0;\n    display: block;\n    font-family: Consolas, Monaco, monospace;\n  }\n  code-block pre {\n    margin: 0;\n  }\n  code-block code {\n    padding: 1em;\n    display: block;\n    font-size: 100%;\n    overflow-x: auto;\n  }\n";

if (link) {
  link.before(style);
} else {
  document.head.append(style);
}