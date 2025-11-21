import { ImageBlockSlice, SliceComponentProps } from "@/data";
import PrismicNextImage from "@/components/PrismicNextImage";

/**
 * Props for `ImageBlock`.
 */
export type ImageBlockProps = SliceComponentProps<ImageBlockSlice>;

/**
 * Component for "ImageBlock" Slices.
 */
const ImageBlock = ({ slice }: ImageBlockProps): JSX.Element => {
  return (
    <PrismicNextImage
    field={slice.primary.image}
    className="not-prose w-full h-full rounded-md  my-10 md:my-14 lg:my-16"
  />
  );
};

export default ImageBlock;
