import { TextBlockSlice, SliceComponentProps } from "@/data";
import RichText from "@/components/RichText";

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  return (
    <div className="max-w-prose">
      <RichText field={slice.primary.text} />
    </div>
  );
};

export default TextBlock;
