import * as React from 'react';

export {};
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

// A type for JSX markup
declare module 'JSX' {
  interface IntrinsicElements {
    'code-block': CodeBlockProps;
  }
}
