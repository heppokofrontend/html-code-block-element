export namespace Endgine {
  type Options = {
    /** Language Mode Name */
    language: string,
  }

  type Result = {
    markup: string,
  };

  export type callback = (src: string, options?: Options) => Result;
}

/** The HTML element for highlighting code fragments. */
export default class HTMLCodeBlockElement extends HTMLElement {
  /**
   * Returns the result of highlighting the received source code string.
   * Before running `customElements.define()`,
   * you need to assign it directly to `HTMLCodeBlockElement.highlight`.
   * @param src - Source code string for highlight
   * @param options - Option for highlight
   * @return - Object of the highlight result
   */
  static highlight: Endgine.callback = (src: string, options: any) => {
    throw new TypeError('The syntax highlighting engine is not set to `HTMLCodeBlockElement.highlight`.');
    return {markup: ''};
  };

  /** Observer to monitor the editing of the content of this element. */
  #observer = new MutationObserver(() => {
    this.#observer.disconnect();

    // Remove elements other than element with `code` as `slot` attribute value.
    // The content of the `[slot="code"]` element will be passed to next rendering.
    const slots = this.querySelectorAll('[slot]:not([slot="code"])');

    for (const slot of slots) {
      slot.remove();
    }

    this.#value = (this.textContent || this.getAttribute('value') || '').replace(/^\n/, '').replace(/\n$/, '');

    this.#render();
  });

  /** Slot elements for Shadow DOM content */
  #slots = (() => {
    /**
     * @param name - The value of name attribute for the slot element
     * @param id - The value of id attribute for the slot element
     * @return - The slot element
     */
    const mkslot = (name: string, id: string = '') => {
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

  /**
   * True when rendered at least once.
   * The purpose of this flag is to available the operation the following usage.
   *
   * Specifically, this is the case where an element is rendered
   * on the screen without ever using the value property.
   *
   * ```js
   * const cb = document.createElement('code-block');
   *
   * cb.language = 'json';
   * cb.textContent = '{"a": 100}';
   * document.body.prepend(cb);
   * ```
   */
  #rendered = false;

  /** Pure DOM content */
  #a11yName: HTMLElement;

  /** Pure DOM content */
  #copyButton: HTMLButtonElement;

  /** Pure DOM content */
  #codeBlock: HTMLElement;

  /** Pure DOM content */
  #codeWrap: HTMLPreElement;

  /** Actual value of the accessor `value` */
  #value: string = '';

  /** Actual value of the accessor `label` */
  #label: string = '';

  /** Actual value of the accessor `language` */
  #language: string = '';

  /** Actual value of the accessor `controls` */
  #controls: boolean = false;

  /** Click event handler of copy button */
  #onClickButton = (() => {
    let key = -1;
    /**
     * Write to the clipboard.
     * @param value - String to be saved to the clipboard
     * @return - A promise
     */
    const copy = (value: string): Promise<void> => {
      if (navigator.clipboard) {
        return navigator.clipboard.writeText(value);
      }

      return new Promise((r) => {
        const textarea = document.createElement('textarea');

        textarea.value = value;
        document.body.append(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        r();
      });
    };

    return async () => {
      const value = this.#value.replace(/\n$/, '');

      clearTimeout(key);

      await copy(value);

      this.#copyButton.classList.add('--copied');
      this.#copyButton.textContent = 'Copied!';
      key = window.setTimeout(() => {
        this.#copyButton.classList.remove('--copied');
        this.#copyButton.textContent = 'Copy';
      }, 1500);
    };
  })();

  /**
   * Outputs the resulting syntax-highlighted markup to the DOM.
   * @param this - instance
   */
  #render = function(this: HTMLCodeBlockElement) {
    if (!this.parentNode) {
      return;
    }

    this.#observer.disconnect();

    const src = (() => {
      if (/[^\n]\n$/.test(this.#value)) {
        return `${this.#value}\n`;
      }

      return this.#value;
    })();

    /** The resulting syntax-highlighted markup */
    const {markup} = HTMLCodeBlockElement.highlight(src, {
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
    this.#observer.observe(this, {
      childList: true,
    });
  }

  /** @return - Syntax Highlighted Source Code */
  get value() {
    return this.#value;
  }

  set value(src: any) {
    this.#value = String(src);
    this.#render();
  }

  /**
   * The accessible name of code block
   * @return - The value of the label attribute
   */
  get label() {
    return this.#label;
  }

  set label(value: any) {
    if (
      this.#label === value ||
      (
        this.#label === '' &&
        value === null
      )
    ) {
      return;
    }

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
   * Language name
   * @return - The value of the language attribute
   */
  get language() {
    return this.#language;
  }

  set language(value: any) {
    if (
      this.#language === value ||
      (
        this.#language === '' &&
        value === null
      )
    ) {
      return;
    }

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
   * The flag to display the UI
   * @return - With or without controls attribute
   * */
  get controls() {
    return this.#controls;
  }

  set controls(value: boolean) {
    if (this.#controls === value) {
      return;
    }

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
    if (
      this.#rendered === false &&
      this.#value === ''
    ) {
      this.#value = this.textContent || '';
    }

    this.#rendered = true;
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

      button.type = 'button';
      button.slot = 'copy-button';
      button.textContent = 'Copy';
      button.setAttribute('aria-live', 'polite');
      button.addEventListener('click', this.#onClickButton);

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
    })();
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
