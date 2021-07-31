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

  #slots = (() => {
    /**
     * @param name - The value of name attribute for the slot element
     * @returns - The slot element
     */
    const mkslot = (name: string, id?: string) => {
      const slot = document.createElement('slot');

      slot.name = name;

      if (id) {
        slot.id = id;
      }

      return slot;
    };

    return {
      name: mkslot('name', 'name'),
      copyButton: mkslot('copy-button'),
      code: mkslot('code'),
    };
  })();
  #a11yName: HTMLElement;
  #copyButton: HTMLButtonElement;
  #codeBlock: HTMLElement;
  #codeWrap: HTMLPreElement;
  /** Actual value of the accessor `value` */
  #value: string = '';
  /** Actual value of the accessor `label` */
  #label: string = '';
  /** Actual value of the accessor `language` */
  #language: string = '';
  /** Actual value of the accessor `controls` */
  #controls: boolean = false;
  /** Outputs the resulting syntax-highlighted markup to the DOM. */
  #render = function (this: HTMLCodeBlockElement) {
    if (!this.parentNode) {
      return;
    }

    /** The resulting syntax-highlighted markup */
    const {value: markup} = HTMLCodeBlockElement.highlight(this.#value, {
      language: this.#language,
    });

    // initialize
    this.textContent = '';
    this.#a11yName.textContent = this.#label;
    this.#slots.name.hidden = !this.#label;
    this.#slots.copyButton.hidden = !this.#controls;
    this.#codeBlock.textContent = '';
    this.#codeBlock.insertAdjacentHTML('afterbegin', markup);
    this.append(this.#a11yName);
    this.append(this.#copyButton);
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
   * The name of code block
   * @returns - The value of the label attribute
   */
  get label() {
    return this.#label;
  }

  set label(value: string) {
    if (value === null) {
      this.#label = '';
      this.removeAttribute('label');
    } else {
      this.#label = String(value);
      this.setAttribute('label', this.#label);
    }

    this.#render();
  }

  /**
   * Language Mode
   * @returns - The value of the language attribute
   */
  get language() {
    return this.#language;
  }

  set language(value: any) {
    if (value === null) {
      this.#language = '';
      this.removeAttribute('language');
    } else {
      this.#language = String(value);
      this.setAttribute('language', this.#language);
    }

    this.#render();
  }

  /**
   * Flag to display the UI
   * @returns - With or without controls attribute
   * */
  get controls() {
    return this.#controls;
  }

  set controls(value: boolean) {
    // TODO: コピーボタンの表示切り替え
    this.#controls = value;

    if (this.#controls) {
      this.setAttribute('controls', '');
    } else {
      this.removeAttribute('controls');
    }

    this.#render();
  }

  static get observedAttributes() {
    return [
      'label',
      'language',
      'controls',
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
      // string
      case 'label':
      case 'language':
        this[attrName] = newValue;

        break;

      // boolean
      case 'controls':
        this[attrName] = typeof newValue === 'string';
    }
  }

  connectedCallback() {
    this.#render();
  }

  constructor() {
    super();

    /* -------------------------------------------------------------------------
     * Setup DOM contents
     * ---------------------------------------------------------------------- */
    /** Container of accessible names (label attribute values). */
    const a11yName = (() => {
      const span = document.createElement('span');

      span.slot = 'name';
      span.textContent = this.getAttribute('label') || '';

      return span;
    })();
    const copyButton = (() => {
      const button = document.createElement('button');

      button.slot = 'copy-button';
      button.textContent = 'Copy';

      return button;
    })();
    const codeElm = (() => {
      const code = document.createElement('code');

      code.tabIndex = 0;
      code.className = 'hljs'; // TODO: Make it variable

      return code;
    })();
    const preElm = (() => {
      const pre = document.createElement('pre');

      pre.slot = 'code';
      pre.append(codeElm);

      return pre;
    })();


    /* -------------------------------------------------------------------------
     * Setup Shadow DOM contents
     * ---------------------------------------------------------------------- */
    /**
     * The container of minimum text that will be read even
     * if the accessible name (label attribute value) is omitted.
     */
    const a11yNamePrefix = (() => {
      const span = document.createElement('span');

      span.id = 'semantics';
      span.hidden = true;
      span.textContent = 'Code Block';

      return span;
    })()
    const container = (() => {
      const div = document.createElement('div');

      div.append(...Object.values(this.#slots));
      div.setAttribute('role', 'group');
      div.setAttribute('aria-labelledby', 'semantics name');

      return div;
    })();
    const shadowRoot = this.attachShadow({
      mode: 'closed',
    });

    shadowRoot.append(a11yNamePrefix);
    shadowRoot.append(container);


    /* -------------------------------------------------------------------------
     * Hard private props initialize
     * ---------------------------------------------------------------------- */
    this.#value = (this.textContent || '').replace(/^\n/, '').replace(/\n$/, '');
    this.#label = a11yName.textContent || '';
    this.#language = this.getAttribute('language') || '';
    this.#controls = this.getAttribute('controls') !== null;
    this.#a11yName = a11yName;
    this.#copyButton = copyButton;
    this.#codeBlock = codeElm;
    this.#codeWrap = preElm;
  }
}

// Protect constructor names from minify
Object.defineProperty(HTMLCodeBlockElement, 'name', {
  value: 'HTMLCodeBlockElement',
});
