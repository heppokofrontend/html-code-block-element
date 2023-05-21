import CustomElementConstructor from '@/class/HTMLCodeBlockElement';
import {createHighlightCallback as createHighlightCallback_} from '@/utils/createHighlightCallback';

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

export const HTMLCodeBlockElement = CustomElementConstructor;
export const createHighlightCallback = createHighlightCallback_;
