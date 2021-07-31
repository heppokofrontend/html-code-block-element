// Inserts the style element into the page for
// the default style of the code-block element.
const style = document.createElement('style');
const link = document.querySelector('head link, head style');

style.textContent = `
  code-block {
    margin: 1em 0;
    display: block;
    font-family: Consolas, Monaco, monospace;
  }
  code-block pre {
    margin: 0;
  }
  code-block code {
    padding: 1em;
    display: block;
    font-size: 100%;
    overflow-x: auto;
  }
`;

if (link) {
  link.before(style);
} else {
  document.head.append(style);
}
