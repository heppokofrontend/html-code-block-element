"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HTMLCodeBlockElement extends HTMLElement {
    /**
     * A library for performing syntax highlighting.
     * Before running `customElements.define()`,
     * you need to assign it directly to `HTMLCodeBlockElement.endgine`.
     * Currently, only highlight.js is assumed.
     */
    static endgine;
    /**
     * Returns the result of highlighting the received source code string.
     * @param src - Source code string for highlight
     * @param options - Option for library of highlight
     * @returns - Object of the highlight result
     */
    static highlight(src, options) {
        const { endgine } = HTMLCodeBlockElement;
        if (!endgine) {
            throw new Error('The syntax highlighting engine is not set to `HTMLCodeBlockElement.endgine`.');
        }
        if (
        // Verifying the existence of a language
        options?.language &&
            endgine.getLanguage(options.language)) {
            return endgine.highlight(src, options);
        }
        return endgine.highlightAuto(src);
    }
    #shadowRoot;
    #codeBlock;
    #codeWrap;
    /** Actual value of the accessor `value` */
    #value = '';
    /** Actual value of the accessor `label` */
    #label = '';
    /** Actual value of the accessor `language` */
    #language = '';
    /** Actual value of the accessor `controls` */
    #controls = false;
    /** Outputs the resulting syntax-highlighted markup to the DOM. */
    #render = function () {
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
    };
    /** @returns - Syntax Highlighted Source Code */
    get value() {
        return this.#value;
    }
    set value(src) {
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
    set label(name) {
        // TODO: Accessiblity Treeにアクセシブルネームを提供する
        this.#label = name || '';
        if (this.#label) {
            this.setAttribute('label', name);
        }
        else {
            this.removeAttribute('label');
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
    set language(name) {
        this.#language = name || '';
        if (this.#language) {
            this.setAttribute('language', name);
        }
        else {
            this.removeAttribute('language');
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
    set controls(flag) {
        // TODO: コピーボタン、ラベルの表示切り替え
        this.#controls = flag;
        if (this.#controls) {
            this.setAttribute('controls', '');
        }
        else {
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
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        // When the value of the attribute being observed changes,
        // pass value to accessors.
        switch (attrName) {
            // string
            case 'label':
            case 'language':
                this[attrName] = newValue || '';
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
        /**
         * @param name - The value of name attribute for the slot element
         * @returns - The slot element
         */
        const mkslot = (name) => {
            const slot = document.createElement('slot');
            slot.name = name;
            return slot;
        };
        const slots = [
            mkslot('label'),
            mkslot('copy-button'),
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
        this.#label = this.getAttribute('label') || '';
        this.#language = this.getAttribute('language') || '';
        this.#controls = this.getAttribute('controls') !== null;
        this.#shadowRoot = this.attachShadow({
            mode: 'closed',
        });
        this.#codeBlock = code;
        this.#codeWrap = pre;
        this.#shadowRoot.append(...slots);
    }
}
exports.default = HTMLCodeBlockElement;
// Protect constructor names from minify
Object.defineProperty(HTMLCodeBlockElement, 'name', {
    value: 'HTMLCodeBlockElement',
});
