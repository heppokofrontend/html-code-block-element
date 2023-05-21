// Inserts the style element into the page for

import styleSheet from '@/stylesheet';

// the default style of the code-block element.
const style = document.createElement('style');
const link = document.querySelector('head link, head style');

style.textContent = styleSheet;
style.dataset.id = 'html-code-block-element';

if (link) {
  link.before(style);
} else {
  document.head.append(style);
}
