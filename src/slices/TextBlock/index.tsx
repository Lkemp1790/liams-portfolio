import { TextBlockSlice, SliceComponentProps } from "@/data";
import RichText from "@/components/RichText";
import Bounded from "@/components/bounded";

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-4 md:py-6"
    >
      <div className="w-full max-w-prose prose prose-xl prose-slate prose-invert">
        <RichText field={slice.primary.text} />
      </div>
    </Bounded>
  );
};

export default TextBlock;
