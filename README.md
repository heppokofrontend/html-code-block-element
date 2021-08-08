# &lt;code-block&gt;

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Published on NPM](https://img.shields.io/npm/v/@heppokofrontend/html-code-block-element.svg)](https://www.npmjs.com/package/@heppokofrontend/html-code-block-element) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/heppokofrontend/html-code-block-element) [![](https://data.jsdelivr.com/v1/package/npm/@heppokofrontend/html-code-block-element/badge)](https://www.jsdelivr.com/package/npm/@heppokofrontend/html-code-block-element) [![Maintainability](https://api.codeclimate.com/v1/badges/38a4e238adb7401844ba/maintainability)](https://codeclimate.com/github/heppokofrontend/html-code-block-element/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/38a4e238adb7401844ba/test_coverage)](https://codeclimate.com/github/heppokofrontend/html-code-block-element/test_coverage) [![Known Vulnerabilities](https://snyk.io/test/npm/@heppokofrontend/html-code-block-element/badge.svg)](https://snyk.io/test/npm/@heppokofrontend/html-code-block-element)
 [![@heppokofrontend/html-code-block-element](https://snyk.io/advisor/npm-package/@heppokofrontend/html-code-block-element/badge.svg)](https://snyk.io/advisor/npm-package/@heppokofrontend/html-code-block-element)

Code block custom element with syntax highlighting and copy button.

It has [highlight.js](https://www.npmjs.com/package/highlight.js?activeTab=readme) for syntax highlighting.

## Usage

DEMO: <https://heppokofrontend.github.io/html-code-block-element/>

<!--
```
<custom-element-demo>
  <template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.1.0/styles/vs.min.css" />
    <link rel="import" href="./demo/index.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<code-block language="html" label="example.html" controls>
&lt;script&gt;console.log(true);&lt;/script&gt;
</code-block>
```

### In browser

It can be used by loading html-code-block-element.common.min.js and one CSS theme.

The highlight.js style is available on CDN. You can also download the JS and CSS from the respective repositories and load them into your page.

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.1.0/styles/vs.min.css" />
<script src="https://cdn.jsdelivr.net/npm/@heppokofrontend/html-code-block-element/lib/html-code-block-element.common.min.js" defer></script>
```

There are three versions of this library available.

- `html-code-block-element.common.min.js` - One that supports only the popular languages.
- `html-code-block-element.all.min.js` - One that enables [all languages](https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md) supported by highligh.js.
- `html-code-block-element.core.min.js` - For developers who want to do their own `hljs.registerLanguage()`.


#### Example

**Note:** The textarea element cannot be included in the content of the textarea element. If you want to include it, please use HTML Entity for the tag.

```html
<code-block language="html" label="example.html" controls>
<textarea><script>console.log(true);</script></textarea>
</code-block>
```

or

```html
<code-block language="html" label="example.html" controls>
&lt;script&gt;console.log(true);&lt;/script&gt;
</code-block>
```

#### Assumption specifications

- **Categories:**
  - [Flow content](https://html.spec.whatwg.org/multipage/dom.html#flow-content-2).
  - [Palpable content](https://html.spec.whatwg.org/multipage/dom.html#palpable-content-2).
- **Contexts in which this element can be used:**
  - Where flow content is expected.
- **Content model:**
  - [Text](https://html.spec.whatwg.org/multipage/dom.html#text-content) or one [textarea](https://html.spec.whatwg.org/multipage/form-elements.html#the-textarea-element) element
- **Tag omission in text/html:**
  - Neither tag is omissible.
- **Content attributes:**
  - [Global attributes](https://html.spec.whatwg.org/multipage/dom.html#global-attributes)
  - `controls` - Show controls
  - `label` - Give the code block a unique name. If omitted, it will always have the accessible name "Code Block".
  - `language` - Language name of the code. If omitted, it will be detected automatically.
- **Accessibility considerations:**
  - [No corresponding role](https://w3c.github.io/html-aria/#dfn-no-corresponding-role)
  - `role` attribute is not allowed
  - `aria-*` attribute is not allowed

#### DOM interface

```java
[Exposed=Window]
interface HTMLCodeBlockElement : HTMLElement {
  [HTMLConstructor] constructor();

  [CEReactions] attribute boolean controls;
  [CEReactions] attribute DOMString label;
  [CEReactions] attribute DOMString language;
  [CEReactions] attribute DOMString value;
};
```

### In development

#### Installation:

```shell
npm install --save @heppokofrontend/html-code-block-element
```

#### Usage:

The `customElements.define()` will also be included.

```javascript
// For highlighting, `highlight.js/lib/common` will be used.
import 'html-code-block-element';
// For highlighting, `highlight.js` will be used.
import 'html-code-block-element/dist/index.all';
// For highlighting, `highlight.js/lib/code` will be used.
import 'html-code-block-element/dist/index.core';
```

If you are using purely constructors:

```javascript
import HTMLCodeBlockElement from 'html-code-block-element/dist/class/HTMLCodeBlockElement';
```

#### Use as constructor

Manual setup:

```js
// 1. Import
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import HTMLCodeBlockElement from 'html-code-block-element/dist/class/HTMLCodeBlockElement';
//  or import { HTMLCodeBlockElement } from 'html-code-block-element';

// Support JavaScript
hljs.registerLanguage('javascript', javascript);


// 2. Set endgine
/**
 * Example: Callback to be called internally
 * @param {string} src - Source code string for highlight
 * @param {{ language: string }} options - Option for highlight
 * @returns {{ markup: string }} - Object of the highlight result
 */
HTMLCodeBlockElement.highlight = function (src, options) {
  if (
    // Verifying the existence of a language
    options?.language &&
    hljs.getLanguage(options.language)
  ) {
    const {value} = hljs.highlight(
      src,
      options,
    );

    return {
      markup: value,
    };
  }

  return {
    markup: hljs.highlightAuto(src).value,
  };
}

// 3. Define
customElements.define('code-block', HTMLCodeBlockElement);

// 4. Make
const cbElm = new HTMLCodeBlockElement();

// 5. Assign
cbElm.language = 'javascript';
cbElm.label = 'your label';
cbElm.value = `const hoge = true;

console.log(hoge);`;

// 6. Append
document.body.append(cbElm); // Render at the same time
```

##### Syntax

No params.

```js
new HTMLCodeBlockElement();
```

## Support browser

- Chrome
- Safari
- Firefox
- Edge
