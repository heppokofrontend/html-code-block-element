// Inserts the style element into the page for
// the default style of the code-block element.
const style = document.createElement('style');
const link = document.querySelector('head link');

style.textContent = `
  code-block {
    display: block;
    margin: 1em 0;
  }
  code-block pre {
    margin: 0;
  }
  code-block code {
    display: block;
    overflow-x: auto;
    padding: 1em;
  }
`;

if (link) {
  link.before(style);
} else {
  document.head.append(style);
}
