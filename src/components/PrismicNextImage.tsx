import Image from "next/image";
import { ImageField } from "@/data";

interface PrismicNextImageProps {
  field: ImageField;
  className?: string;
  imgixParams?: any;
  priority?: boolean;
}

export default function PrismicNextImage({ field, className, priority }: PrismicNextImageProps) {
  if (!field?.url) return null;
  return (
    <Image
      src={field.url}
      alt={field.alt || ""}
      width={1920}
      height={1080}
      className={className}
      priority={priority}
      quality={100}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
    />
  );
}

