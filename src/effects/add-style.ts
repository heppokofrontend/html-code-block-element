// Inserts the style element into the page for
// the default style of the code-block element.
const style = document.createElement('style');
const link = document.querySelector('head link, head style');

style.textContent = `
  code-block {
    position: relative;
    margin: 1em 0;
    display: block;
    font-size: 80%;
    font-family: Consolas, Monaco, monospace;
  }
  code-block span[slot="name"] {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    padding: 0 5px;
    max-width: 90%;
    color: #fff;
    white-space: pre;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
    background: #75758a;
    box-sizing: border-box;
  }
  code-block button {
    all: unset;
    outline: revert;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    padding: 10px;
    display: block;
    font-family: inherit;
    color: #fff;
    opacity: 0;
    mix-blend-mode: exclusion;
  }

  code-block:hover button,
  code-block button:focus {
    opacity: 1;
  }

  code-block pre,
  code-block code {
    font-family: inherit;
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
  code-block[label]:not([label=""]) pre code {
    padding-top: 2em;
  }
  `;

if (link) {
  link.before(style);
} else {
  document.head.append(style);
}
