import {HLJSApi, HighlightOptions} from 'highlight.js';

export default class HTMLCodeBlockElement extends HTMLElement {
  /**
   * A library for performing syntax highlighting.
   * Before running `customElements.define()`,
   * you need to assign it directly to `HTMLCodeBlockElement.endgine`.
   * Currently, only highlight.js is assumed.
   */
  static endgine: HLJSApi;

  /**
   * Returns the result of highlighting the received source code string.
   * @param src - Source code string for highlight
   * @param options - Option for library of highlight
   * @returns - Object of the highlight result
   */
  static highlight(
    src: string,
    options: HighlightOptions,
  ) {
    const {endgine} = HTMLCodeBlockElement;

    if (!endgine) {
      throw new Error('The syntax highlighting engine is not set to `HTMLCodeBlockElement.endgine`.');
    }

    if (
      // Verifying the existence of a language
      options?.language &&
      endgine.getLanguage(options.language)
    ) {
      return endgine.highlight(
        src,
        options,
      );
    }

    return endgine.highlightAuto(src);
  }


  #shadowRoot: ShadowRoot;
  #codeBlock: HTMLElement;
  #codeWrap: HTMLPreElement;
  /** Actual value of the accessor `value` */
  #value: string = '';
  /** Actual value of the accessor `language` */
  #language: string = '';

  /** Outputs the resulting syntax-highlighted markup to the DOM. */
  #render() {
    if (!this.parentNode) {
      return;
    }

    /** The resulting syntax-highlighted markup */
    const markup = HTMLCodeBlockElement.highlight(this.#value, {
      language: this.#language,
    }).value;

    // initialize
    this.textContent = '';
    this.#codeBlock.textContent = '';
    this.#codeBlock.insertAdjacentHTML('afterbegin', markup);
    this.append(this.#codeWrap);
  }

  /** @returns - Syntax Highlighted Source Code */
  get value() {
    return this.#value;
  }

  set value(src: string) {
    this.#value = src;
    this.#render();
  }

  /**
   * Language Mode
   * @returns - The value of the language attribute
   */
  get language() {
    return this.#language;
  }

  set language(name: string) {
    this.#language = name || '';

    if (this.#language) {
      this.setAttribute('language', name);
    } else {
      this.removeAttribute('language');
    }

    this.#render();
  }

  static get observedAttributes() {
    return [
      'language',
      // 'controls',
    ];
  }

  attributeChangedCallback(
    attrName: string,
    oldValue: string,
    newValue: string,
  ) {
    if (oldValue === newValue) {
      return;
    }

    // When the value of the attribute being observed changes,
    // pass value to accessors.
    switch (attrName) {
      case 'language':
        this[attrName] = newValue || '';

        break;
    }
  }

  connectedCallback() {
    this.#render();
  }

  constructor() {
    super();

    /**
     * @param name - The value of name attribute for the slot element
     * @returns - The slot element
     */
    const mkslot = (name: string) => {
      const slot = document.createElement('slot');

      slot.name = name;

      return slot;
    }
    const slots = [
      mkslot('code'),
    ];
    const pre = document.createElement('pre');
    const code = document.createElement('code');

    code.tabIndex = 0;
    code.className = 'hljs'; // TODO: Make it variable
    pre.slot = 'code';
    pre.append(code);

    // Hard private props initialize
    this.#value = (this.textContent || '').replace(/^\n/, '');
    this.#language = this.getAttribute('language') || '';
    this.#shadowRoot = this.attachShadow({
      mode: 'closed',
    });
    this.#codeBlock = code;
    this.#codeWrap = pre;
    this.#shadowRoot.append(...slots);
  }
}

// Protect constructor names from minify
Object.defineProperty(HTMLCodeBlockElement, 'name', {
  value: 'HTMLCodeBlockElement',
});
