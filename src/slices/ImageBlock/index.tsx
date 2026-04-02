import { ImageBlockSlice, SliceComponentProps } from "@/data";
import PrismicNextImage from "@/components/PrismicNextImage";
import Bounded from "@/components/bounded";

/**
 * Props for `ImageBlock`.
 */
export type ImageBlockProps = SliceComponentProps<ImageBlockSlice>;

/**
 * Component for "ImageBlock" Slices.
 */
const ImageBlock = ({ slice }: ImageBlockProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-4 md:py-6"
    >
      <div className="w-full max-w-prose overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
        <PrismicNextImage
          field={slice.primary.image}
          className="w-full h-auto object-cover"
        />
      </div>
    </Bounded>
  );
};

export default ImageBlock;
