import { TextBlockSlice, SliceComponentProps } from "@/data";
import RichText from "@/components/RichText";

export type TextBlockProps = SliceComponentProps<TextBlockSlice>;

const TextBlock = ({ slice }: TextBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6 md:py-12"
    >
      <div className="mx-auto max-w-3xl">
        <div className="prose prose-lg prose-slate prose-invert max-w-none
          prose-headings:font-extrabold prose-headings:tracking-tight prose-headings:text-white
          prose-h2:text-3xl prose-h2:mt-0 prose-h2:mb-4
          prose-h3:text-blue-300 prose-h3:uppercase prose-h3:tracking-widest prose-h3:text-sm prose-h3:font-bold prose-h3:mb-3
          prose-p:text-slate-300 prose-p:leading-relaxed prose-p:text-base
          prose-strong:text-white prose-strong:font-semibold
          prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
          prose-li:text-slate-300
          prose-ul:space-y-1">
          <RichText field={slice.primary.text} />
        </div>
      </div>
    </section>
  );
};

export default TextBlock;
