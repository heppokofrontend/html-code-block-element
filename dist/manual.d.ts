/// <reference types="highlight.js" />
import CustomElementConstructor from './class/HTMLCodeBlockElement';
export declare type CodeBlockProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement> & {
    /** The accessible name of code block */
    label?: string | undefined;
    /** The Language name */
    language?: string | undefined;
    /** The flag to display the UI */
    controls?: boolean;
};
export declare const HTMLCodeBlockElement: typeof CustomElementConstructor;
export declare const createHighlightCallback: (endgine: import("highlight.js").HLJSApi) => import("./class/HTMLCodeBlockElement").EndgineFunction;
