export declare namespace Endgine {
    type Options = {
        /** Language Mode Name */
        language: string;
    };
    type Result = {
        markup: string;
    };
    export type callback = (src: string, options?: Options) => Result;
    export {};
}
/** The HTML element for highlighting code fragments. */
export default class HTMLCodeBlockElement extends HTMLElement {
    #private;
    /**
     * Returns the result of highlighting the received source code string.
     * Before running `customElements.define()`,
     * you need to assign it directly to `HTMLCodeBlockElement.highlight`.
     * @param src - Source code string for highlight
     * @param options - Option for highlight
     * @return - Object of the highlight result
     */
    static highlight: Endgine.callback;
    /** @return - Syntax Highlighted Source Code */
    get value(): any;
    set value(src: any);
    /**
     * The name of code block
     * @return - The value of the label attribute
     */
    get label(): any;
    set label(value: any);
    /**
     * Language Mode
     * @return - The value of the language attribute
     */
    get language(): any;
    set language(value: any);
    /**
     * Flag to display the UI
     * @return - With or without controls attribute
     * */
    get controls(): boolean;
    set controls(value: boolean);
    static get observedAttributes(): string[];
    attributeChangedCallback(attrName: string, oldValue: string, newValue: string): void;
    connectedCallback(): void;
    constructor();
}
