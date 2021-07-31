import { HLJSApi, HighlightOptions } from 'highlight.js';
export default class HTMLCodeBlockElement extends HTMLElement {
    #private;
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
    static highlight(src: string, options: HighlightOptions): {
        value: string;
    };
    /** @returns - Syntax Highlighted Source Code */
    get value(): string;
    set value(src: string);
    /**
     * The name of code block
     * @returns - The value of the label attribute
     */
    get label(): string;
    set label(value: string);
    /**
     * Language Mode
     * @returns - The value of the language attribute
     */
    get language(): any;
    set language(value: any);
    /**
     * Flag to display the UI
     * @returns - With or without controls attribute
     * */
    get controls(): boolean;
    set controls(value: boolean);
    static get observedAttributes(): string[];
    attributeChangedCallback(attrName: string, oldValue: string, newValue: string): void;
    connectedCallback(): void;
    constructor();
}
