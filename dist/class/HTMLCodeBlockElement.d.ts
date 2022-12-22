export declare type EndgineProps = {
    src: string;
    options?: {
        /** Language Mode Name */
        language: string;
    };
};
export declare type EndgineFunction = (props: EndgineProps) => {
    markup: string;
};
export default class HTMLCodeBlockElement extends HTMLElement {
    #private;
    /**
     * Returns the result of highlighting the received source code string.
     * Before running `customElements.define()`,
     * you need to assign it directly to `HTMLCodeBlockElement.highlight`.
     */
    static get highlight(): EndgineFunction;
    static set highlight(endgine: EndgineFunction);
    /** @return - Syntax Highlighted Source Code */
    get value(): string;
    set value(src: unknown);
    /**
     * The accessible name of code block
     * @return - The value of the label attribute
     */
    get label(): string;
    set label(value: unknown);
    /**
     * Language name
     * @return - The value of the language attribute
     */
    get language(): string;
    set language(value: unknown);
    /**
     * The flag to display the UI
     * @return - With or without controls attribute
     * */
    get controls(): boolean;
    set controls(value: boolean);
    set notrim(value: boolean);
    static get observedAttributes(): string[];
    attributeChangedCallback(attrName: string, oldValue: string, newValue: string): void;
    connectedCallback(): void;
    constructor();
}
