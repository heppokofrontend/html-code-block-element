declare module 'react' {
  // A type for the properties of a function component
  interface CodeBlockHTMLAttributes<T> extends HTMLAttributes<T> {
    /** The accessible name of code block */
    label?: string | undefined;
    /** The Language name */
    language?: string | undefined;
    /** The flag to display the UI */
    controls?: boolean;
  }
}

export type CodeBlockProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLPreElement>,
  HTMLPreElement
> & {
  /** The accessible name of code block */
  label?: string | undefined;
  /** The Language name */
  language?: string | undefined;
  /** The flag to display the UI */
  controls?: boolean;
};

declare global {
  // A type for JSX markup
  namespace JSX {
    interface IntrinsicElements {
      'code-block': CodeBlockProps;
    }
  }
}
